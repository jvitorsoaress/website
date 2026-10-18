import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, Renderer2, ViewChild, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './home/home';
import { NavMenu } from './nav-menu/nav-menu';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavMenu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('Website');

  @ViewChild('cursorGlow') private cursorGlow?: ElementRef<HTMLElement>;

  private animationFrameId: number | null = null;
  private removeListeners: (() => void) | null = null;

  constructor(
    private readonly renderer: Renderer2,
    private readonly zone: NgZone
  ) {}

  ngAfterViewInit(): void {
    const glow = this.cursorGlow?.nativeElement;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!glow || !hasFinePointer || prefersReducedMotion) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hasPosition = false;

    const animateGlow = (): void => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      const remainingDistance = Math.hypot(targetX - currentX, targetY - currentY);
      if (remainingDistance < 0.5) {
        currentX = targetX;
        currentY = targetY;
      }

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (currentX !== targetX || currentY !== targetY) {
        this.animationFrameId = window.requestAnimationFrame(animateGlow);
      } else {
        this.animationFrameId = null;
      }
    };

    const handleMouseMove = (event: Event): void => {
      if (!(event instanceof MouseEvent)) {
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;

      if (!hasPosition) {
        currentX = targetX;
        currentY = targetY;
        hasPosition = true;
        glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      glow.style.opacity = '1';

      if (this.animationFrameId === null) {
        this.animationFrameId = window.requestAnimationFrame(animateGlow);
      }
    };

    const handleMouseLeave = (): void => {
      glow.style.opacity = '0';

      if (this.animationFrameId !== null) {
        window.cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    };

    this.zone.runOutsideAngular(() => {
      const removeMouseMoveListener = this.renderer.listen('window', 'mousemove', handleMouseMove, { passive: true });
      const removeMouseLeaveListener = this.renderer.listen('window', 'mouseleave', handleMouseLeave);
      this.removeListeners = () => {
        removeMouseMoveListener();
        removeMouseLeaveListener();
      };
    });
  }

  ngOnDestroy(): void {
    this.removeListeners?.();

    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
}
