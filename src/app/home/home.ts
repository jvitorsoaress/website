import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Services } from '../services/services';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Projects, Contact, Services],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly languageService = inject(LanguageService);
  cvUrl = '/cv.pdf';

  // Services migrated to standalone component `Services`

  backendTech = ['C#', '.NET', 'ASP.NET Core', 'SQL Server'];
  frontendTech = [];

  experience = [
    {
      company: 'Ambipar ESG',
      role: 'home.experience.ambipar.role',
      period: 'home.experience.ambipar.period',
      location: 'home.experience.location',
      description: 'home.experience.ambipar.description',
      technologies: ['C#', 'ASP.NET', 'SQL Server']
    },
    {
      company: 'Tecla T',
      role: 'home.experience.tecla.role',
      period: 'home.experience.tecla.period',
      location: 'home.experience.location',
      description: 'home.experience.tecla.description',
      technologies: ['C#', 'ASP.NET', 'SQL Server']
    },
    {
      company: 'Planner Identificação Inteligente',
      role: 'home.experience.planner.role',
      period: 'home.experience.planner.period',
      location: 'home.experience.planner.location',
      description: 'home.experience.planner.description',
      technologies: ['C#', '.NET', 'ASP.NET MVC', 'ASP.NET WebForms', 'Windows Forms', 'VB.NET', 'SQL Server', 'Entity Framework', 'ADO.NET', 'home.experience.support', 'home.experience.infrastructure', 'home.experience.networking', 'home.experience.serverAdministration']
    }
  ];

  education = [
    { institution: 'PUC Minas', title: 'home.education.puc.title', period: 'home.education.puc.period' },
    { institution: 'UniCesumar', title: 'home.education.unicesumar.title', period: 'home.education.unicesumar.period' }
  ];

  certifications = [
    { title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals', issuer: 'Microsoft', detail: 'home.certifications.security' },
    { title: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', detail: 'home.certifications.azure' },
    { title: 'EF SET English Certificate', issuer: 'EF SET', detail: 'home.certifications.efset' }
  ];

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
