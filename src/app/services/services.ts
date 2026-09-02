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
    { title: 'Backend Development', desc: 'APIs, integrations, business logic and legacy modernization.' },
    { title: 'API Development & Integration', desc: 'REST APIs, authentication, and third‑party integrations.' },
    { title: 'Legacy Modernization', desc: 'Modernizing existing .NET applications without disrupting operations.' },
    { title: 'Web Development', desc: 'Server-side and SPA web applications integrated with .NET backends.' },
    { title: 'Database Development', desc: 'Schema design, performance tuning, migrations and data integrity for SQL Server/Postgres.' },
    { title: 'IT Consulting', desc: 'Architecture reviews, cloud migration guidance and maintainability consulting.' }
  ];
}
