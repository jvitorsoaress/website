import { Component, inject, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../theme.service';
import { Language, LanguageService } from '../language.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css'
})
export class NavMenu implements OnInit, OnDestroy {
  readonly themeService = inject(ThemeService);
  readonly languageService = inject(LanguageService);
  private readonly renderer = inject(Renderer2);
  private readonly zone = inject(NgZone);
  private removeScrollListener?: () => void;

  isExpanded = false;
  isScrolled = false;

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.removeScrollListener = this.renderer.listen(
        'window',
        'scroll',
        this.onWindowScroll,
        { passive: true }
      );
      this.onWindowScroll();
    });
  }

  ngOnDestroy(): void {
    this.removeScrollListener?.();
  }

  private readonly onWindowScroll = (): void => {
    const isScrolled = window.scrollY > 50;
    if (this.isScrolled === isScrolled) return;

    this.zone.run(() => {
      this.isScrolled = isScrolled;
    });
  };

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  setLanguage(language: Language) {
    this.languageService.setLanguage(language);
  }
}
