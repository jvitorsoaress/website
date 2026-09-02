import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Services } from '../services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule, Projects, Contact, Services],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  typedStrings = [
    'I help businesses build, maintain, and modernize .NET applications, APIs, and integrations.'
  ];

  cvUrl = '/cv.pdf';

  // Services migrated to standalone component `Services`

  backendTech = ['C#', 'ASP.NET Core', '.NET', 'SQL Server', 'PostgreSQL'];
  frontendTech = [];

  downloadCV() {
    try {
      window.open(this.cvUrl, '_blank');
    } catch (e) {
      // fallback
      location.href = this.cvUrl;
    }
  }

  goToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
