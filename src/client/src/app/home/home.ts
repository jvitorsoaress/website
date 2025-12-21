import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule, About, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
