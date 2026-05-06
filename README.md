 # Portfolio

This is a personal portfolio project built with Angular 21, Tailwind CSS, and Angular Material. The app features an adaptive header, multi-language support (Ukrainian / English), pages for `Home`, `Projects`, `About`, and `Contact`, a scrolling tech carousel and an interactive project filter.

## Home Page
<img width="561" height="360" alt="p1" src="https://github.com/user-attachments/assets/fa3dad91-5b80-46ae-87e5-71357a17cc85" />

## Abouts Page
<img width="561" height="361" alt="p2" src="https://github.com/user-attachments/assets/6af3b12b-421f-4268-99fa-2c46e341de98" />

## Key Page
<img width="560" height="359" alt="p3" src="https://github.com/user-attachments/assets/a0f1c00f-db54-4c59-afb1-b096e584affe" />

## Contact Page
<img width="561" height="362" alt="p4" src="https://github.com/user-attachments/assets/9d99328e-5efb-4e8e-b2f6-a6883d850220" />






## Key features

- Loading animation on startup and during page navigation
- Active menu item highlighting in the header
- Language toggle supporting Ukrainian and English
- `Projects` page with dynamic GitHub repository loading
- Multi-select technology filter for projects
- Responsive layout built with Tailwind CSS
- Angular Material components for a polished UI

## App structure

- `src/app/app.ts` — root component with loader and navigation logic
- `src/app/app.html` — shared layout with header, navigation, and language toggle
- `src/app/language.service.ts` — service for language labels and translations
- `src/app/home.component.html` — home page with tech carousel and social buttons
- `src/app/projects.component.ts` — projects page with GitHub repository filtering
- `src/app/about.component.ts` — about page
- `src/app/contact.component.ts` — contact page

## Technologies

- Angular 21
- Tailwind CSS
- Angular Material
- TypeScript
- RxJS

## Run locally

```bash
npm install
npm run start
```

Open your browser at `http://localhost:4200`.

