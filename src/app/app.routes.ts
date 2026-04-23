import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'projects', component: Projects },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
