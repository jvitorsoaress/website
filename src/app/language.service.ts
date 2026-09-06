import { Injectable, signal } from '@angular/core';

export type Language = 'pt-BR' | 'en';

type TranslationSet = Record<string, string>;

const translations: Record<Language, TranslationSet> = {
  'pt-BR': {
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.mainNavigation': 'Navegação principal',
    'nav.homeAria': 'Página inicial de João Vitor Soares',
    'nav.toggleMenu': 'Alternar menu de navegação',
    'nav.portuguese': 'Português',
    'nav.english': 'Inglês',
    'nav.languageSelector': 'Seletor de idioma',
    'nav.switchToPortuguese': 'Mudar para português',
    'nav.switchToEnglish': 'Mudar para inglês',
    'theme.switchToLight': 'Mudar para o tema claro',
    'theme.switchToDark': 'Mudar para o tema escuro',
    'home.eyebrow': 'Desenvolvimento backend · .NET',
    'home.greeting': 'Olá, eu sou João Vitor',
    'home.role': '.NET Software Developer',
    'home.description': 'Eu construo, mantenho e modernizo aplicações .NET, APIs e integrações.',
    'home.supportingText': 'Desenvolvedor focado em backend, com experiência em aplicações corporativas, modernização e manutenção de longo prazo.',
    'home.workTogether': 'Vamos trabalhar juntos',
    'home.viewCv': 'Ver currículo',
    'home.coreTechnologies': 'Tecnologias principais',
    'home.experience': 'Experiência',
    'home.experienceTitle': 'Backend confiável, feito para durar.',
    'home.experienceRole': '.NET Developer',
    'home.experienceSummary': 'Aplicações corporativas, desenvolvimento backend, manutenção e modernização.',
    'home.backendDevelopment': 'Desenvolvimento backend',
    'home.enterpriseApplications': 'Aplicações corporativas',
    'home.apisAndDatabase': 'APIs e integração com bancos de dados',
    'home.maintenanceModernization': 'Manutenção e modernização',
    'services.eyebrow': 'O que eu faço',
    'services.title': 'Trabalho backend prático para produtos que precisam continuar avançando.',
    'services.backendTitle': 'Desenvolvimento backend',
    'services.backendDescription': 'Construção de aplicações .NET e APIs confiáveis e fáceis de manter.',
    'services.modernizationTitle': 'Modernização de sistemas legados',
    'services.modernizationDescription': 'Evolução de aplicações existentes sem perder de vista a estabilidade e a manutenção.',
    'services.integrationsTitle': 'APIs e integrações',
    'services.integrationsDescription': 'Desenho de APIs REST e integrações entre sistemas e serviços.',
    'projects.eyebrow': 'Projeto selecionado',
    'projects.title': 'Uma pequena amostra do trabalho que valorizo.',
    'projects.type': 'Biblioteca C#',
    'projects.description': 'Biblioteca reutilizável focada em padrões e abstrações de acesso a dados.',
    'projects.viewProjects': 'Ver projetos',
    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos trabalhar juntos.',
    'contact.description': 'Você tem um projeto, uma oportunidade ou quer simplesmente entrar em contato?',
    'footer.linkedin': 'LinkedIn de João Vitor Soares',
    'footer.github': 'GitHub de João Vitor Soares'
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.mainNavigation': 'Main navigation',
    'nav.homeAria': 'João Vitor Soares home',
    'nav.toggleMenu': 'Toggle navigation menu',
    'nav.portuguese': 'Portuguese',
    'nav.english': 'English',
    'nav.languageSelector': 'Language selector',
    'nav.switchToPortuguese': 'Switch to Portuguese',
    'nav.switchToEnglish': 'Switch to English',
    'theme.switchToLight': 'Switch to light theme',
    'theme.switchToDark': 'Switch to dark theme',
    'home.eyebrow': 'Backend development · .NET',
    'home.greeting': "Hey, I'm João Vitor",
    'home.role': '.NET Software Developer',
    'home.description': 'I build, maintain, and modernize .NET applications, APIs, and integrations.',
    'home.supportingText': 'Backend-focused developer with experience working on enterprise applications, modernization, and long-term maintenance.',
    'home.workTogether': "Let's work together",
    'home.viewCv': 'View CV',
    'home.coreTechnologies': 'Core technologies',
    'home.experience': 'Experience',
    'home.experienceTitle': 'Reliable backend work, built to last.',
    'home.experienceRole': '.NET Developer',
    'home.experienceSummary': 'Enterprise applications, backend development, maintenance, and modernization.',
    'home.backendDevelopment': 'Backend development',
    'home.enterpriseApplications': 'Enterprise applications',
    'home.apisAndDatabase': 'APIs and database integration',
    'home.maintenanceModernization': 'Maintenance and modernization',
    'services.eyebrow': 'What I do',
    'services.title': 'Practical backend work for products that need to keep moving.',
    'services.backendTitle': 'Backend Development',
    'services.backendDescription': 'Building reliable and maintainable .NET applications and APIs.',
    'services.modernizationTitle': 'Legacy Modernization',
    'services.modernizationDescription': 'Improving existing applications while keeping stability and maintainability in view.',
    'services.integrationsTitle': 'APIs & Integrations',
    'services.integrationsDescription': 'Designing REST APIs and integrations between systems and services.',
    'projects.eyebrow': 'Selected project',
    'projects.title': 'A small sample of the work I care about.',
    'projects.type': 'C# class library',
    'projects.description': 'A reusable library focused on data-access patterns and abstractions.',
    'projects.viewProjects': 'View projects',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's work together.",
    'contact.description': 'Have a project, an opportunity, or just want to get in touch?',
    'footer.linkedin': 'João Vitor Soares on LinkedIn',
    'footer.github': 'João Vitor Soares on GitHub'
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<Language>(this.getSavedLanguage());

  constructor() {
    this.applyLanguage(this.language());
  }

  t(key: string): string {
    return translations[this.language()][key] ?? key;
  }

  setLanguage(language: Language) {
    this.language.set(language);
    this.applyLanguage(language);
    localStorage.setItem('language', language);
  }

  private getSavedLanguage(): Language {
    return localStorage.getItem('language') === 'en' ? 'en' : 'pt-BR';
  }

  private applyLanguage(language: Language) {
    document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en';
  }
}
