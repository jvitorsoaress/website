import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { LanguageService } from '../language.service';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link to the English CV when English is active', () => {
    TestBed.inject(LanguageService).setLanguage('en');
    fixture.detectChanges();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.btn-outline-primary');
    expect(new URL(link.href).pathname).toBe('/cv/resume-en.pdf');
    expect(link.download).toBe('resume-en.pdf');
    expect(link.textContent).toContain('View CV');
  });

  it('should update the CV link when Portuguese is active', () => {
    const languageService = TestBed.inject(LanguageService);
    languageService.setLanguage('en');
    fixture.detectChanges();
    languageService.setLanguage('pt-BR');
    fixture.detectChanges();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.btn-outline-primary');
    expect(new URL(link.href).pathname).toBe('/cv/curriculo-pt.pdf');
    expect(link.download).toBe('curriculo-pt.pdf');
    expect(link.textContent).toContain('Ver currículo');
  });
});
