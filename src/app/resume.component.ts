import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section appScrollReveal class="px-4 py-10 sm:px-6">
      <div class="mx-auto max-w-4xl">
        <div class="animated-card rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10">
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-slate-950">Anastasiia Zlahodukh</h1>
            <p class="text-xl text-slate-700 mt-2">Full Stack Developer </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-2xl font-semibold text-slate-950 mb-4">Contacts</h2>
              <div class="space-y-2 text-slate-700">
                <p>+380961914540</p>
                <p>anastasiamegei@ukr.net</p>
                <p>LinkedIn</p>
                <p>GitHub</p>
                <p>Kyiv, Ukraine</p>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-semibold text-slate-950 mb-4">Summary</h2>
              <p class="text-slate-700">
                Result-oriented MERN Developer, detail-focused and committed to quality. Passionate about growth and eager to contribute to innovative projects.
              </p>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Tech Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 class="font-semibold text-slate-800 mb-2">Languages</h3>
                <ul class="text-slate-700 space-y-1">
                  <li>Node.js, Express.js</li>
                  <li>Mongo DB</li>
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
                <h3 class="font-semibold text-slate-800 mb-2">Languages</h3>
                <ul class="text-slate-700 space-y-1">
                  <li>English - upper-intermediate</li>
                  <li>Ukrainian - native</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Work Experience</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold text-slate-800">2024 - 2026</h3>
                <p class="text-slate-700 font-medium mb-3">FullStack Developer</p>
                <ul class="text-slate-700 space-y-2 list-disc list-inside">
                  <li>Developing and maintaining responsive, pixel-perfect UI components using React and TypeScript for an AI-driven video shorts creation platform</li>
                  <li>Integrating front-end components with APIs and third-party libraries</li>
                  <li>Working in a MERN stack environment and occasionally contributing to the backend with Node.js, including creating and updating API endpoints and controllers</li>
                  <li>Partnering closely with design and QA teams to ensure consistent delivery of high-quality, user-centered features</li>
                  <li>Participating in code reviews, sharing knowledge, and promoting best practices in frontend architecture, performance and maintainability</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Education</h2>
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-slate-800">2023 - 2024</h3>
                <p class="text-slate-700">Fullstack Developer</p>
                <p class="text-slate-600">IT School GoIT</p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">Soft Skills</h2>
            <ul class="text-slate-700 space-y-1">
              <li>Attention to detail</li>
              <li>Time management</li>
              <li>Teamwork</li>
            </ul>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-slate-950 mb-4">PROJECT EXPERIENCE</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold text-slate-800">CodeScoutApp</h3>
                <p class="text-slate-700">Frontend: GitHub-repository [React, Redux, TS]</p>
                <p class="text-slate-600">Developed a web app that visualizes GitHub profiles and repositories with styled UI, enabling users to explore stats and README files in one place.</p>
              </div>
              <div>
                <h3 class="font-semibold text-slate-800">MediaShelf</h3>
                <p class="text-slate-700">Frontend: GitHub-repository [TS, React, Redux, Tailwind, MUI]</p>
                <p class="text-slate-700">Backend: GitHub-repository [Node, MongoDB, REST API]</p>
                <p class="text-slate-600">MediaShelf is a multimedia hub where users can search for books, movies, audio, video, and images in one place. It allows you to securely log in and save your favorite content for easy access anytime.</p>
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