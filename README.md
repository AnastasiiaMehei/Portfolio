 # Portfolio

This is a personal portfolio project built with Angular 21, Tailwind CSS, and Angular Material. The app features an adaptive header, multi-language support (Ukrainian / English), pages for `Home`, `Projects`, `About`, and `Contact`, a scrolling tech carousel, and an interactive project filter.

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
- npm

## Run locally

```bash
npm install
npm run start
```

Open your browser at `http://localhost:4200`.

## Build

```bash
npm run build
```

The production output is written to `dist/portfolio`.

## Contribution

Contributions are welcome. If you want to propose improvements or add new features, please create an issue or submit a pull request with a clear description of the change.

### How to contribute

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make changes and test them locally.
4. Submit a pull request with a summary of your updates.

## Deployment

To deploy the application, build the production bundle and serve the contents of `dist/portfolio` using a static web server or a hosting platform.

```bash
npm run build
```

Then deploy the files from `dist/portfolio` to your chosen hosting provider.

Popular deployment options:

- Vercel
- Netlify
- Firebase Hosting
- GitHub Pages
