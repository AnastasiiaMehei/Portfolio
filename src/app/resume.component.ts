import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section appScrollReveal class="px-4 py-10 sm:px-6">
      <div class="mx-auto max-w-4xl">
<div class="animated-card rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10 bg-gradient-to-br from-[#d4ecda] via-[#f4fdf6] to-[#b9cdbe]">          
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-slate-950">Anastasiia Zlahodukh</h1>
            <p class="text-xl text-slate-700 mt-2">Full Stack Developer</p>
          </div>
   <!-- Summary -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Summary</h2>
            <p class="text-slate-700">
              Result-oriented MERN Developer, detail-focused and committed to quality. Passionate about growth and eager to contribute to innovative projects.
            </p>
          </div>
          <!-- Contacts -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Contacts</h2>
            <div class="space-y-2 text-slate-700">
              <p>📞 +380961914540</p>
              <p>✉️ anastasiamegei@ukr.net</p>
              <p>
                🔗 <a href="https://www.linkedin.com/in/anastasiia-zlahodukh/" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a>
              </p>
              <p>
                💻 <a href="https://github.com/AnastasiiaMehei/" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
              </p>
              <p>📍 Kyiv, Ukraine</p>
            </div>
          </div>

       

          <!-- Tech Skills -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Tech Skills</h2>
            <div class="space-y-6">
              <div>
                <ul class="text-slate-700 space-y-1">
                  <li>Node.js, Express.js</li>
                  <li>MongoDB</li>
                  <li>React, React Native</li>
                  <li>Angular, Vue</li>
                  <li>Remix</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind</li>
                  <li>MUI</li>
                </ul>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-slate-950 mb-4">Languages</h2>
                <ul class="text-slate-700 space-y-1">
                  <li>English — upper-intermediate</li>
                  <li>Ukrainian — native</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Work Experience -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Work Experience</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold text-slate-800">2024 - 2026</h3>
                <p class="text-slate-700 font-medium mb-3">FullStack Developer</p>
                <ul class="text-slate-700 space-y-2 list-disc list-inside">
                  <li>Developing responsive, pixel-perfect UI components using React and TypeScript</li>
                  <li>Integrating front-end components with APIs and third-party libraries</li>
                  <li>Contributing to backend with Node.js (API endpoints, controllers)</li>
                  <li>Collaborating with design and QA teams</li>
                  <li>Promoting best practices in frontend architecture and maintainability</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Education</h2>
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-slate-800">2023 - 2024</h3>
                <p class="text-slate-700">Fullstack Developer</p>
                <p class="text-slate-600">IT School GoIT</p>
              </div>
            </div>
          </div>

          <!-- Soft Skills -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Soft Skills</h2>
            <ul class="text-slate-700 space-y-1">
              <li>Attention to detail</li>
              <li>Time management</li>
              <li>Teamwork</li>
            </ul>
          </div>

          <!-- Projects -->
          <div>
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Project Experience</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold text-slate-800">CodeScoutApp</h3>
                <p class="text-slate-700">
                  🔗 <a href="https://code-scout-app.vercel.app" target="_blank" class="text-blue-600 hover:underline">Live Demo</a> | 
                  <a href="https://github.com/AnastasiiaMehei/code-scout-app" target="_blank" class="text-blue-600 hover:underline">Repository</a>
                </p>
                <p class="text-slate-600">Web app that visualizes GitHub profiles and repositories with styled UI, enabling users to explore stats and README files in one place.</p>
              </div>
              <div>
                <h3 class="font-semibold text-slate-800">MediaShelf</h3>
                <p class="text-slate-700">
                  🔗 <a href="https://media-shelf-fe-qckw.vercel.app" target="_blank" class="text-blue-600 hover:underline">Frontend Demo</a> | 
                  <a href="https://github.com/AnastasiiaMehei/MediaShelfFE" target="_blank" class="text-blue-600 hover:underline">Frontend Repo</a>
                </p>
                <p class="text-slate-700">
                  🔗 <a href="https://mediashelfbe.onrender.com" target="_blank" class="text-blue-600 hover:underline">Backend Demo</a> | 
                  <a href="https://github.com/AnastasiiaMehei/MediaShelfBE" target="_blank" class="text-blue-600 hover:underline">Backend Repo</a>
                </p>
                <p class="text-slate-600">Multimedia hub where users can search for books, movies, audio, video, and images in one place, with secure login and favorites saving.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ResumeComponent {}
