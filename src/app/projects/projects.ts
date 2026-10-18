import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  readonly languageService = inject(LanguageService);
  showAllProjects = false;

  readonly projects = [
    {
      id: 'astra',
      title: 'Astra ERP',
      meta: 'projects.astra.meta',
      description: 'projects.astra.description',
      technologies: []
    },
    {
      id: 'persisto',
      title: 'Persisto',
      meta: 'projects.persisto.meta',
      description: 'projects.persisto.description',
      technologies: ['C#', 'Entity Framework', 'Dapper']
    }
  ];

  get visibleProjects() {
    return this.showAllProjects ? this.projects : this.projects.slice(0, 1);
  }

  toggleProjects() {
    this.showAllProjects = !this.showAllProjects;
  }
}
