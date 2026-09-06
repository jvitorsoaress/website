import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.getSavedTheme());

  constructor() {
    this.applyTheme(this.theme());
  }

  isDark() {
    return this.theme() === 'dark';
  }

  toggle() {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
    this.applyTheme(theme);
    localStorage.setItem('theme', theme);
  }

  private getSavedTheme(): Theme {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
