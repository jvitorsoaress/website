import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  readonly languageService = inject(LanguageService);
}
