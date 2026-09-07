import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';
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

  private animationFrameId: number | null = null;
  private removeMouseMoveListener: (() => void) | null = null;
  private removeMouseLeaveListener: (() => void) | null = null;

  constructor(private readonly hostElement: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const glow = this.hostElement.nativeElement.querySelector<HTMLElement>('.cursor-glow');
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!glow || !hasFinePointer || prefersReducedMotion) {
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const animateGlow = (): void => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      this.animationFrameId = window.requestAnimationFrame(animateGlow);
    };

    const handleMouseMove = (event: MouseEvent): void => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.style.opacity = '1';
    };

    const handleMouseLeave = (): void => {
      glow.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    this.removeMouseMoveListener = () => window.removeEventListener('mousemove', handleMouseMove);
    this.removeMouseLeaveListener = () => window.removeEventListener('mouseleave', handleMouseLeave);
    this.animationFrameId = window.requestAnimationFrame(animateGlow);
  }

  ngOnDestroy(): void {
    this.removeMouseMoveListener?.();
    this.removeMouseLeaveListener?.();

    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
}
