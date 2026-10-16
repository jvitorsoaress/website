import { AfterViewInit, Component, ElementRef, inject, NgZone, OnDestroy, ViewChild } from '@angular/core';

interface SpherePoint {
  x: number;
  y: number;
  z: number;
  glyph: string;
  accent: boolean;
}

@Component({
  selector: 'app-ascii-globe',
  standalone: true,
  template: '<canvas #canvas></canvas>',
  styleUrl: './ascii-globe.css',
  host: { 'aria-hidden': 'true' }
})
export class AsciiGlobeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;
  private readonly zone = inject(NgZone);

  private readonly points = this.createSpherePoints(360);
  private readonly motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  private context: CanvasRenderingContext2D | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private animationFrameId: number | null = null;
  private lastFrameTime: number | null = null;
  private width = 0;
  private height = 0;
  private rotation = 0;
  private pageVisible = true;
  private inViewport = true;
  private prefersReducedMotion = this.motionQuery.matches;
  private readonly handleVisibilityChange = (): void => {
    this.pageVisible = document.visibilityState === 'visible';
    this.updateAnimation();
  };
  private readonly handleMotionChange = (event: MediaQueryListEvent): void => {
    this.prefersReducedMotion = event.matches;
    if (this.prefersReducedMotion) this.rotation = 0;
    this.updateAnimation();
  };

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const canvas = this.canvasRef.nativeElement;
      this.context = canvas.getContext('2d');
      if (!this.context) return;

      this.resizeObserver = new ResizeObserver(() => this.resizeCanvas());
      this.resizeObserver.observe(canvas);
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        this.inViewport = entry.isIntersecting;
        this.updateAnimation();
      });
      this.intersectionObserver.observe(canvas);
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
      this.motionQuery.addEventListener('change', this.handleMotionChange);
      this.resizeCanvas();
      this.updateAnimation();
    });
  }

  ngOnDestroy(): void {
    this.stopAnimation();
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    this.motionQuery.removeEventListener('change', this.handleMotionChange);
  }

  private createSpherePoints(count: number): SpherePoint[] {
    const glyphs = ['0', '1', '{}', '<>', '#', 'C#', '()', '=>', '[]', '/>', '&&', '01'];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    return Array.from({ length: count }, (_, index) => {
      const y = 1 - (2 * (index + 0.5)) / count;
      const ringRadius = Math.sqrt(1 - y * y);
      const angle = goldenAngle * index;

      return {
        x: Math.cos(angle) * ringRadius,
        y,
        z: Math.sin(angle) * ringRadius,
        glyph: glyphs[(index * 7 + Math.floor(index / 9)) % glyphs.length],
        accent: index % 17 === 0
      };
    });
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    this.width = bounds.width;
    this.height = bounds.height;
    canvas.width = Math.round(this.width * pixelRatio);
    canvas.height = Math.round(this.height * pixelRatio);
    this.context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    this.drawFrame();
  }

  private updateAnimation(): void {
    const shouldAnimate = this.pageVisible && this.inViewport && !this.prefersReducedMotion;
    if (shouldAnimate && this.animationFrameId === null) {
      this.lastFrameTime = null;
      this.animationFrameId = window.requestAnimationFrame(this.animate);
    } else if (!shouldAnimate) {
      this.stopAnimation();
      this.drawFrame();
    }
  }

  private readonly animate = (time: number): void => {
    if (this.lastFrameTime !== null) {
      this.rotation += (time - this.lastFrameTime) * 0.00012;
    }
    this.lastFrameTime = time;
    this.drawFrame();
    this.animationFrameId = window.requestAnimationFrame(this.animate);
  };

  private stopAnimation(): void {
    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.lastFrameTime = null;
  }

  private drawFrame(): void {
    const context = this.context;
    if (!context || !this.width || !this.height) return;

    context.clearRect(0, 0, this.width, this.height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    const radius = Math.min(this.width, this.height) * 0.43;
    const camera = radius * 3.2;
    const cosine = Math.cos(this.rotation);
    const sine = Math.sin(this.rotation);
    const tilt = 0.24;
    const tiltCosine = Math.cos(tilt);
    const tiltSine = Math.sin(tilt);
    const textColor = getComputedStyle(this.canvasRef.nativeElement).color;

    for (const point of this.points) {
      const rotatedX = point.x * cosine + point.z * sine;
      const rotatedZ = -point.x * sine + point.z * cosine;
      const rotatedY = point.y * tiltCosine - rotatedZ * tiltSine;
      const depth = point.y * tiltSine + rotatedZ * tiltCosine;
      const perspective = camera / (camera - depth * radius);
      const frontness = depth;

      context.globalAlpha = frontness < -0.12 ? 0.025 : 0.16 + Math.max(0, frontness) * 0.72;
      context.fillStyle = point.accent ? '#FF6A00' : textColor;
      context.font = `${Math.max(7, 11 * perspective)}px ui-monospace, SFMono-Regular, Consolas, monospace`;
      context.shadowColor = point.accent ? 'rgba(255, 106, 0, 0.34)' : 'transparent';
      context.shadowBlur = point.accent && frontness > 0.15 ? 5 : 0;
      context.fillText(
        point.glyph,
        this.width / 2 + rotatedX * radius * perspective,
        this.height / 2 + rotatedY * radius * perspective
      );
    }

    context.globalAlpha = 1;
    context.shadowBlur = 0;
  }
}