import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Services } from '../services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Projects, Contact, Services],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cvUrl = '/cv.pdf';

  // Services migrated to standalone component `Services`

  backendTech = ['C#', '.NET', 'ASP.NET Core', 'SQL Server'];
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
