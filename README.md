 # Portfolio

This is a personal portfolio project built with Angular 21, Tailwind CSS, and Angular Material. The app features an adaptive header, multi-language support (Ukrainian / English), pages for `Home`, `Projects`, `About`, and `Contact`, a scrolling tech carousel and an interactive project filter.

## Home Page
<img width="692" height="357" alt="image" src="https://github.com/user-attachments/assets/b3fc0211-de3c-42a0-9b66-b32a2c8294e4" />

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
- Contact form with backend integration (NestJS + PostgreSQL)
- Responsive layout built with Tailwind CSS
- Angular Material components for a polished UI

## App structure

- `src/app/app.ts` — root component with loader and navigation logic
- `src/app/app.html` — shared layout with header, navigation, and language toggle
- `src/app/language.service.ts` — service for language labels and translations
- `src/app/home.component.html` — home page with tech carousel and social buttons
- `src/app/projects.component.ts` — projects page with GitHub repository filtering
- `src/app/about.component.ts` — about page
- `src/app/contact.component.ts` — contact page with form submission
- `src/app/contact.service.ts` — service for sending contact messages to backend
- `src/app/resume.component.ts` — resume page

## Technologies

- **Frontend**: Angular 21, Tailwind CSS, Angular Material, TypeScript, RxJS
- **Backend**: NestJS, Prisma, PostgreSQL, Docker

## Run locally

### Frontend
```bash
npm install
npm run start
```
Open your browser at `http://localhost:4200`.

### Backend
Make sure you have Docker installed and running.

```bash
# Clone the backend repository
git clone <your-backend-repo-url>
cd <backend-directory>

# Start the backend with Docker
docker-compose up -d

# Or run locally (if you have Node.js and PostgreSQL installed)
npm install
npm run start:dev
```

The backend will be available at `http://localhost:3000`.

### Contact Form
The contact form sends POST requests to `http://localhost:3000/messages` with the following structure:
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

## Build

```bash
npm run build
```

## Deployment

### Frontend Deployment Options

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Angular and build the project
3. Set environment variables if needed

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/portfolio`

#### Firebase
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

#### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --configuration production --base-href "https://yourusername.github.io/repository-name/"
npx angular-cli-ghpages --dir=dist/portfolio
```

### Backend Deployment

#### Railway
1. Connect your backend repository to Railway
2. Railway will automatically detect NestJS and set up the database
3. Set environment variables for database connection

#### Render
1. Connect your backend repository to Render
2. Set build command: `npm install`
3. Set start command: `npm run start:prod`
4. Add PostgreSQL database instance

#### Heroku
```bash
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

## Contribution

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow Angular style guide
- Use TypeScript strict mode
- Write meaningful commit messages
- Test your changes before submitting PR
- Update documentation if needed

## License

This project is open source and available under the [MIT License](LICENSE).

