import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    { title: 'Backend Development', desc: 'Building reliable and maintainable .NET applications and APIs.' },
    { title: 'Legacy Modernization', desc: 'Improving existing applications while keeping stability and maintainability in view.' },
    { title: 'APIs & Integrations', desc: 'Designing REST APIs and integrations between systems and services.' }
  ];
}
