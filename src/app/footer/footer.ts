import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly languageService = inject(LanguageService);
}
