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
    'home.experienceTitle': 'Da infraestrutura ao desenvolvimento .NET, com sistemas corporativos em evolução contínua.',
    'home.experienceIntro': 'Experiência prática em backend, manutenção, modernização e evolução de sistemas essenciais para o negócio.',
    'home.current': 'Atual',
    'home.relevantTechnologies': 'Tecnologias relevantes',
    'home.credentials': 'Formação e certificações',
    'home.credentialsTitle': 'Base técnica construída ao longo da trajetória.',
    'home.education': 'Formação',
    'home.certifications': 'Certificações',
    'home.experience.location': 'Belo Horizonte, Brasil · Híbrido',
    'home.experience.ambipar.period': 'Mar. de 2026 - Atual',
    'home.experience.tecla.period': 'Ago. de 2025 - Mar. de 2026',
    'home.experience.plannerDev.period': 'Mar. de 2023 - Ago. de 2025',
    'home.experience.plannerSupport.period': 'Nov. de 2021 - Mar. de 2023',
    'home.experience.ambipar.role': '.NET Developer',
    'home.experience.ambipar.description': 'Desenvolvimento e manutenção de aplicações corporativas .NET, com foco em sistemas backend usando C#, ASP.NET e SQL Server. Atuação em novas funcionalidades, resolução de problemas em produção, integrações com bancos de dados, melhorias de performance e modernização gradual de sistemas existentes.',
    'home.experience.tecla.role': '.NET Developer',
    'home.experience.tecla.description': 'Atuação em ambiente de consultoria, alocado em um cliente corporativo de longo prazo, contribuindo para o desenvolvimento e suporte de aplicações .NET internas. Foco em backend com C#, ASP.NET e SQL Server, evolução de funcionalidades, manutenção de sistemas legados e resolução de demandas críticas do dia a dia.',
    'home.experience.plannerDev.role': 'Full Stack Developer',
    'home.experience.plannerDev.description': 'Manutenção e evolução de sistemas corporativos legados construídos com ASP.NET MVC, ASP.NET WebForms e Windows Forms usando C# e VB.NET. Participação em modernização gradual, melhorias de interface, otimização de performance, automação de processos internos e manutenção de camadas de acesso a dados com SQL Server, Entity Framework e ADO.NET.',
    'home.experience.plannerSupport.role': 'IT Support',
    'home.experience.plannerSupport.description': 'Suporte técnico a usuários, manutenção de estações de trabalho, resolução de problemas de rede, administração de servidores e suporte à infraestrutura de TI.',
    'home.experience.support': 'Suporte técnico',
    'home.experience.infrastructure': 'Infraestrutura',
    'home.experience.networking': 'Redes',
    'home.experience.serverAdministration': 'Administração de servidores',
    'home.education.puc.title': 'Pós-graduação em Engenharia de Software',
    'home.education.unicesumar.title': 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    'home.education.puc.period': 'Nov. de 2024 - Mai. de 2026',
    'home.education.unicesumar.period': 'Out. de 2020 - Jun. de 2023',
    'home.certifications.security': 'Emitido em nov. de 2025',
    'home.certifications.azure': 'Emitido em mar. de 2025',
    'home.certifications.efset': '62/100 · C1 Advanced',
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
    'home.experienceTitle': 'From infrastructure to .NET development, evolving enterprise systems over time.',
    'home.experienceIntro': 'Practical experience across backend development, maintenance, modernization, and the long-term evolution of business-critical systems.',
    'home.current': 'Current',
    'home.relevantTechnologies': 'Relevant technologies',
    'home.credentials': 'Education and certifications',
    'home.credentialsTitle': 'A technical foundation built over time.',
    'home.education': 'Education',
    'home.certifications': 'Certifications',
    'home.experience.location': 'Belo Horizonte, Brazil · Hybrid',
    'home.experience.ambipar.period': 'Mar 2026 - Present',
    'home.experience.tecla.period': 'Aug 2025 - Mar 2026',
    'home.experience.plannerDev.period': 'Mar 2023 - Aug 2025',
    'home.experience.plannerSupport.period': 'Nov 2021 - Mar 2023',
    'home.experience.ambipar.role': '.NET Developer',
    'home.experience.ambipar.description': 'Developing and maintaining enterprise .NET applications, with a focus on backend systems using C#, ASP.NET and SQL Server. Working on new features, production issue resolution, database integrations, performance improvements and the gradual modernization of existing systems.',
    'home.experience.tecla.role': '.NET Developer',
    'home.experience.tecla.description': 'Worked in a consulting environment assigned to a long-term enterprise client, contributing to the development and support of internal .NET applications. Focused on backend development with C#, ASP.NET and SQL Server, feature evolution, legacy maintenance and critical day-to-day demands.',
    'home.experience.plannerDev.role': 'Full Stack Developer',
    'home.experience.plannerDev.description': 'Maintained and evolved legacy enterprise systems built with ASP.NET MVC, ASP.NET WebForms and Windows Forms using C# and VB.NET. Contributed to gradual modernization, interface improvements, performance optimization, internal process automation and data-access layers using SQL Server, Entity Framework and ADO.NET.',
    'home.experience.plannerSupport.role': 'IT Support',
    'home.experience.plannerSupport.description': 'Provided technical support for users, workstation maintenance, network troubleshooting, server administration and IT infrastructure support.',
    'home.experience.support': 'Technical support',
    'home.experience.infrastructure': 'Infrastructure',
    'home.experience.networking': 'Networking',
    'home.experience.serverAdministration': 'Server administration',
    'home.education.puc.title': 'Postgraduate Degree in Software Engineering',
    'home.education.unicesumar.title': 'Associate Degree in Systems Analysis and Development',
    'home.education.puc.period': 'Nov 2024 - May 2026',
    'home.education.unicesumar.period': 'Oct 2020 - Jun 2023',
    'home.certifications.security': 'Issued Nov 2025',
    'home.certifications.azure': 'Issued Mar 2025',
    'home.certifications.efset': '62/100 · C1 Advanced',
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
