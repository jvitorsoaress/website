import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { NavMenu } from './nav-menu/nav-menu';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, NavMenu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Website');
}
