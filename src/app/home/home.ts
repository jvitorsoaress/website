import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  typedStrings = [
    'I help businesses build, maintain, and modernize .NET applications, APIs, and integrations.'
  ];

  cvUrl = '/cv.pdf';

  services = [
    { title: 'Backend Development', desc: 'APIs, integrations, business logic and legacy modernization.' },
    { title: 'API Development & Integration', desc: 'REST APIs, authentication, and third‑party integrations.' },
    { title: 'Legacy Modernization', desc: 'Modernizing existing .NET applications without disrupting operations.' },
    { title: 'Web Development', desc: 'Server-side and SPA web applications integrated with .NET backends.' },
    { title: 'Database Development', desc: 'Schema design, performance tuning, migrations and data integrity for SQL Server/Postgres.' },
    { title: 'IT Consulting', desc: 'Architecture reviews, cloud migration guidance and maintainability consulting.' }
  ];

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
