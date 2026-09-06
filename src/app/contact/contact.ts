import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  readonly languageService = inject(LanguageService);
}
