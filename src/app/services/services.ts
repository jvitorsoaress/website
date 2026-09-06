import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  readonly languageService = inject(LanguageService);
  services = [
    { title: 'services.backendTitle', desc: 'services.backendDescription' },
    { title: 'services.modernizationTitle', desc: 'services.modernizationDescription' },
    { title: 'services.integrationsTitle', desc: 'services.integrationsDescription' }
  ];
}
