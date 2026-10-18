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
    { title: 'services.backendTitle', desc: 'services.backendDescription', icon: 'backend' },
    { title: 'services.modernizationTitle', desc: 'services.modernizationDescription', icon: 'modernization' },
    { title: 'services.integrationsTitle', desc: 'services.integrationsDescription', icon: 'integrations' }
  ];
}
