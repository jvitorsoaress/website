import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//import { NgxTypedJsModule } from 'ngx-typed-js';

//import { AboutComponent } from '../about/about.component';
//import { ProjectsComponent } from '../projects/projects.component';
//import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
//standalone: true,
//imports: [NgxTypedJsModule, AboutComponent, ProjectsComponent, ContactComponent],
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
