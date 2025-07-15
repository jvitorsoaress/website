import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  projectsGrouped: Project[][] = []; // Array of arrays to hold grouped projects
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.http.get<Project[]>('/assets/projects.json')
      .subscribe(data => {
        this.projects = data;
        this.projectsGrouped = this.groupProjects(this.projects, 3); // Assuming you want 3 projects per group
      });
  }

  groupProjects(projects: Project[], groupSize: number): Project[][] {
    const groupedProjects: Project[][] = [];
    for (let i = 0; i < projects.length; i += groupSize) {
      groupedProjects.push(projects.slice(i, i + groupSize));
    }
    return groupedProjects;
  }
}
