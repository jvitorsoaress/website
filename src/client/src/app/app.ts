import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
//standalone: true,
  imports: [RouterOutlet],
//imports: [RouterOutlet, NavMenuComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Website');
}
