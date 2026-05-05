import { Injectable, signal } from '@angular/core';

export type LanguageCode = 'ua' | 'en';

export interface LanguageLabels {
  home: string;
  about: string;
  projects: string;
  contact: string;
  heroTitle: string;
  heroText: string;
  actionPrimary: string;
  actionSecondary: string;
  languageToggle: string;
  aboutMe: string;
  contactFormTitle: string;
  contactFormText: string;
  contactFormName: string;
  contactFormNameRequired: string;
  contactFormNameShort: string;
  contactFormEmail: string;
  contactFormEmailRequired: string;
  contactFormEmailInvalid: string;
  contactFormMessage: string;
  contactFormMessageRequired: string;
  contactFormMessageShort: string;
  contactFormSubmit: string;
  contactDetailsHeading: string;
  contactDetailsTitle: string;
  contactDetailsText: string;
  contactDetailsEmailLabel: string;
  contactDetailsEmail: string;
  contactDetailsPhoneLabel: string;
  contactDetailsPhone: string;
  aboutMeDescription: string;
  aboutMeEmail: string;
  aboutMeLocation: string;  aboutHeading: string;
  aboutText: string;
  projectsHeading: string;
  technologies: string;
  allTechs: string;
  filterTitle: string;
  filterDescription: string;
  loadingRepos: string;
  noRepos: string;
  noDescription: string;
  contactHeading: string;
  contactText: string;
  socialResume: string;
  socialGithub: string;
  socialLinkedin: string;
  socialTelegram: string;
  contactMe: string;
  contactTelegram: string;
  contactViber: string;
  contactWhatsapp: string;
  contactEmail: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  readonly language = signal<LanguageCode>('ua');

  readonly labels: Record<LanguageCode, LanguageLabels> = {
    ua: {
      home: 'Головна',
      about: 'Про мене',
      projects: 'Проєкти',
      contact: 'Зв\'язатися',
      heroTitle: 'Стильний header для твого портфоліо',
      heroText: 'Це простий адаптивний верхній блок із кнопками навігації, що працює з Tailwind і Angular Material.',
      actionPrimary: 'Переглянути проєкти',
      actionSecondary: 'Написати мені',
      languageToggle: 'English',
      contactFormTitle: 'Напиши мені',
      contactFormText: 'Заповни форму нижче, і я зв’яжусь з тобою найближчим часом.',
      contactFormName: 'Ім’я',
      contactFormNameRequired: 'Вкажіть своє ім’я.',
      contactFormNameShort: 'Ім’я має містити принаймні 2 символи.',
      contactFormEmail: 'Email',
      contactFormEmailRequired: 'Вкажіть свій email.',
      contactFormEmailInvalid: 'Введіть дійсний email.',
      contactFormMessage: 'Повідомлення',
      contactFormMessageRequired: 'Вкажіть повідомлення.',
      contactFormMessageShort: 'Повідомлення має містити принаймні 10 символів.',
      contactFormSubmit: 'Відправити',
      contactDetailsHeading: 'Контакти',
      contactDetailsTitle: 'Залишайся на зв’язку',
      contactDetailsText: 'Я завжди відкрита до цікавих проєктів, співпраці та нових можливостей. Напиши мені, і я відповім якнайшвидше.',
      contactDetailsEmailLabel: 'Email',
      contactDetailsEmail: 'anastasiamegei@ukr.net',
      contactDetailsPhoneLabel: 'Телефон',
      contactDetailsPhone: '+380961914540',
      aboutMe: '👩‍💻 Про мене',
      aboutMeDescription: 'Я Анастасія Злаходух, Full Stack розробниця, яка захоплена побудовою адаптивних, масштабованих та дружніх до користувача цифрових продуктів. Моя експертиза охоплює MERN стек — від створення пікселів-perfect UI компонентів у React та TypeScript до проектування та інтеграції логіки backend\'у з Node.js, Express та MongoDB.\n Я внесла вклад у реальні проекти, що включають сучасну розробку UI, архітектуру повторно використовуваних компонентів та безпечну інтеграцію API. Мені подобається співпрацювати з міжфункціональними командами, вишліфовувати деталі та переконуватися, що кожна функція надає реальну цінність користувачам.\n В даний час я розширюю свої знання Next.js, Remix та backend-важких фреймворків, щоб посилити свою здатність надавати end-to-end рішення. Моя мета — постійно розвиватися, писати чистий та підтримуваний код та вносити вклад у впливові продукти, які поєднують інновації та користувацькість.\n ✨ Подорожі та натхнення\n Окрім програмування, мене надихають подорожі та відкриття нових місць. Я люблю досліджувати культури та кухні різних країн, адже це розширює світогляд і додає креативності у роботі. Мала можливість відвідати Францію, Хорватію, Грецію, Туреччину, Італію та Іспанію — кожна з цих країн подарувала унікальні враження та ідеї. У майбутньому прагну відкривати нові напрямки, поєднувати подорожі з професійним розвитком та знаходити натхнення у різноманітті світу.',
      aboutMeEmail: '📧 Email: anastasiamegei@ukr.net',
      aboutMeLocation: '📍 Kyiv, Ukraine',      aboutHeading: 'Про мене',
      aboutText: 'Я фронтенд-розробниця, яка створює сучасні інтерфейси з Angular, Tailwind та Material. Мені подобається робити сайти чіткими, зручними та професійними.',
      projectsHeading: 'Проєкти',
      technologies: 'Стек',
      allTechs: 'Усі',
      filterTitle: 'Фільтр',
      filterDescription: 'Тут ти можеш швидко знайти репозиторій за технологіями.',
      loadingRepos: 'Завантаження репозиторіїв із GitHub...',
      noRepos: 'Немає репозиторіїв за обраним фільтром.',
      noDescription: 'Опис відсутній.',
      contactHeading: 'Контакти',
      contactText: 'Залиш свій контакт або напиши мені прямо зараз — я відповім якнайшвидше.',
      socialResume: 'Резюме',
      socialGithub: 'GitHub',
      socialLinkedin: 'LinkedIn',
      socialTelegram: 'Telegram',
      contactMe: 'Зв\'язатися зі мною',
      contactTelegram: 'Telegram',
      contactViber: 'Viber',
      contactWhatsapp: 'WhatsApp',
      contactEmail: 'Email'
    },
    en: {
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      contact: 'Contact me',
      heroTitle: 'A stylish header for your portfolio',
      heroText: 'This is a simple responsive top section with navigation buttons built using Tailwind and Angular Material.',
      actionPrimary: 'View projects',
      actionSecondary: 'Message me',
      languageToggle: 'Українська',
      contactFormTitle: 'Write to me',
      contactFormText: 'Fill the form below and I will get back to you as soon as possible.',
      contactFormName: 'Name',
      contactFormNameRequired: 'Please enter your name.',
      contactFormNameShort: 'Name must be at least 2 characters.',
      contactFormEmail: 'Email',
      contactFormEmailRequired: 'Please enter your email.',
      contactFormEmailInvalid: 'Enter a valid email address.',
      contactFormMessage: 'Message',
      contactFormMessageRequired: 'Please enter a message.',
      contactFormMessageShort: 'Message must be at least 10 characters.',
      contactFormSubmit: 'Send message',
      contactDetailsHeading: 'Contacts',
      contactDetailsTitle: 'Stay connected',
      contactDetailsText: 'I am always open to interesting projects, collaboration, and new opportunities. Send me a message and I will reply quickly.',
      contactDetailsEmailLabel: 'Email',
      contactDetailsEmail: 'anastasiamegei@ukr.net',
      contactDetailsPhoneLabel: 'Phone',
      contactDetailsPhone: '+380961914540',
      aboutMe: '👩‍💻 About Me',
      aboutMeDescription: 'I\'m, Anastasiia Zlakhodukh, a Full Stack Developer passionate about building adaptive, scalable, and user-friendly digital products. My expertise covers the MERN stack — from crafting pixel-perfect UI components in React and TypeScript to designing and integrating backend logic with Node.js, Express, and MongoDB.\n I have contributed to real-world projects involving modern UI development, reusable component architecture, and secure API integration. I enjoy collaborating with cross-functional teams, refining details, and ensuring that every feature delivers real value to users.\n Currently, I am expanding my knowledge of Next.js, Remix, and backend-heavy frameworks to strengthen my ability to deliver end-to-end solutions. My goal is to continuously grow, write clean and maintainable code, and contribute to impactful products that combine innovation with usability.\n ✨ Travel & Inspiration\nBeyond programming, I find inspiration in traveling and discovering new places. Exploring different cultures and cuisines broadens my perspective and fuels creativity in my work. I have visited France, Croatia, Greece, Turkey, Italy, and Spain — each country has given me unique experiences and ideas. In the future, I aspire to explore even more destinations, combining travel with professional growth and drawing inspiration from the diversity of the world.',
      aboutMeEmail: '📧 Email: anastasiamei@ukr.net',
      aboutMeLocation: '📍 Kyiv, Ukraine',      aboutHeading: 'About me',
      aboutText: 'I am a frontend developer creating modern interfaces with Angular, Tailwind, and Material. I enjoy making sites clear, easy to use, and professional.',
      projectsHeading: 'Projects',
      technologies: 'Technologies',
      allTechs: 'All',
      filterTitle: 'Filter',
      filterDescription: 'Quickly find the repositories by technology.',
      loadingRepos: 'Loading repositories from GitHub...',
      noRepos: 'No repositories match the selected filter.',
      noDescription: 'No description available.',
      contactHeading: 'Contact',
      contactText: 'Leave your contact or message me now — I will reply as soon as possible.',
      socialResume: 'Resume',
      socialGithub: 'GitHub',
      socialLinkedin: 'LinkedIn',
      socialTelegram: 'Telegram',
      contactMe: 'Contact me',
      contactTelegram: 'Telegram',
      contactViber: 'Viber',
      contactWhatsapp: 'WhatsApp',
      contactEmail: 'Email'
    }
  };

  toggleLanguage() {
    this.language.set(this.language() === 'ua' ? 'en' : 'ua');
  }
}
