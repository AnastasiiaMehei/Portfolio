import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  standalone: true,
  selector: 'app-certifications',
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section appScrollReveal class="px-4 py-10 sm:px-6">
      <div class="mx-auto max-w-6xl space-y-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-slate-950">Certifications</h1>
          <p class="mt-3 text-slate-600">A collection of professional credentials, issued by trusted providers.</p>
        </div>

        <div class="space-y-8">
          <section>
            <h3 class="text-xl font-semibold text-slate-800">Full-Stack Development</h3>
            <div class="mt-4 grid gap-6 sm:grid-cols-2">
              <!-- GoIT - prioritized -->
              <article appScrollReveal class="group rounded-2xl border border-black/5    p-8 shadow-lg transform transition hover:scale-102 hover:shadow-2xl" style="animation-delay: 0.10s;">
                <div class="flex items-center gap-4">
                  <img src="/Copilot_goit.png" alt="GoIT" class="h-20 w-20 rounded-xl object-contain" />
                  <div>
                    <h4 class="text-2xl font-semibold text-slate-950">FULLSTACK Developer — GoIT</h4>
                    <p class="mt-1 text-sm text-slate-600">GoIT — career-focused bootcamp</p>
                  </div>
                </div>
                <div class="mt-4 text-slate-700 space-y-2">
                  <p><span class="font-semibold">Issued:</span> Oct 2023 · <span class="font-semibold">Expires:</span> Sep 2024</p>
                  <p><span class="font-semibold">Credential ID:</span> 31881</p>
                  <p><span class="font-semibold">Skills:</span> HTML5, CSS3, JavaScript, React, Node.js, TypeScript, deployment</p>
                  <p><span class="font-semibold">Summary (what I learned):</span> Built full-stack projects covering responsive front-ends and RESTful back-ends, plus interview readiness and career skills for junior roles.</p>
                  <p><a href="https://drive.google.com/file/d/1lK04vzdDebmumkgAs5Lim0beuBAji-X6/view" target="_blank" class="inline-block mt-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-700">View credential</a></p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h3 class="text-xl font-semibold text-slate-800">Frontend Development</h3>
            <div class="mt-4 grid gap-6 sm:grid-cols-2">
              <!-- React (prioritized) -->
              <article appScrollReveal class="group rounded-2xl border border-black/5    p-8 shadow-lg transform transition hover:scale-102 hover:shadow-2xl" style="animation-delay: 0.12s;">
                <div class="flex items-center gap-4">
                  <img src="/react.png" alt="React" class="h-20 w-20 rounded-xl object-contain" />
                  <div>
                    <h4 class="text-2xl font-semibold text-slate-950">Developing Front-End Apps with React</h4>
                    <p class="mt-1 text-sm text-slate-600">IBM / Coursera</p>
                  </div>
                </div>
                <div class="mt-4 text-slate-700 space-y-2">
                  <p><span class="font-semibold">Issued:</span> May 2026</p>
                  <p><span class="font-semibold">Credential ID:</span> 0KPTPWB4AV88</p>
                  <p><span class="font-semibold">Skills:</span> React.js, JSX, Hooks, Redux, component architecture</p>
                  <p><span class="font-semibold">Summary (what I learned):</span> Built component-driven UIs, managed state with hooks and Redux, and applied best practices for responsive, testable front-end apps.</p>
                  <p><a href="https://www.coursera.org/account/accomplishments/verify/0KPTPWB4AV88" target="_blank" class="inline-block mt-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-700">View certificate</a></p>
                </div>
              </article>

              <!-- Intro HTML/CSS/JS -->
              <article appScrollReveal class="group rounded-2xl border border-black/5    p-8 shadow-lg transform transition hover:scale-102 hover:shadow-2xl" style="animation-delay: 0.14s;">
                <div class="flex items-center gap-4">
                  <img src="/Copilot_js.png" alt="HTML/CSS/JS" class="h-20 w-20 rounded-xl object-contain" />
                  <div>
                    <h4 class="text-2xl font-semibold text-slate-950">Introduction to HTML, CSS & JavaScript</h4>
                    <p class="mt-1 text-sm text-slate-600">IBM / Coursera</p>
                  </div>
                </div>
                <div class="mt-4 text-slate-700 space-y-2">
                  <p><span class="font-semibold">Issued:</span> May 2026</p>
                  <p><span class="font-semibold">Credential ID:</span> O1RBUFVXV93V</p>
                  <p><span class="font-semibold">Skills:</span> Semantic HTML, responsive CSS, DOM scripting, form validation</p>
                  <p><span class="font-semibold">Summary (what I learned):</span> Gained practical fundamentals for building and styling web pages and adding client-side interactivity and basic tooling.</p>
                  <p><a href="https://www.coursera.org/account/accomplishments/verify/O1RBUFVXV93V" target="_blank" class="inline-block mt-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-700">View certificate</a></p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h3 class="text-xl font-semibold text-slate-800">Backend Development</h3>
            <div class="mt-4 grid gap-6 sm:grid-cols-2">
              <!-- Node.js & MongoDB -->
              <article appScrollReveal class="group rounded-2xl border border-black/5    p-8 shadow-lg transform transition hover:scale-102 hover:shadow-2xl" style="animation-delay: 0.16s;">
                <div class="flex items-center gap-4">
                  <img src="/Copilot_nodeMongo.png" alt="Node & MongoDB" class="h-20 w-20 rounded-xl object-contain" />
                  <div>
                    <h4 class="text-2xl font-semibold text-slate-950">Node.js & MongoDB: Back-end Database Apps</h4>
                    <p class="mt-1 text-sm text-slate-600">IBM / Coursera</p>
                  </div>
                </div>
                <div class="mt-4 text-slate-700 space-y-2">
                  <p><span class="font-semibold">Issued:</span> May 2026</p>
                  <p><span class="font-semibold">Credential ID:</span> 3XK9QB9DTXCO</p>
                  <p><span class="font-semibold">Skills:</span> Node.js, Express, MongoDB, REST API design, auth</p>
                  <p><span class="font-semibold">Summary (what I learned):</span> Implemented secure RESTful APIs, designed NoSQL schemas, and practised authentication, error handling and cloud deployment patterns.</p>
                  <p><a href="https://www.coursera.org/account/accomplishments/verify/3XK9QB9DTXCO" target="_blank" class="inline-block mt-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-700">View certificate</a></p>
                </div>
              </article>

              <!-- Node + Express -->
              <article appScrollReveal class="group rounded-2xl border border-black/5    p-8 shadow-lg transform transition hover:scale-102 hover:shadow-2xl" style="animation-delay: 0.18s;">
                <div class="flex items-center gap-4">
                  <img src="/Copilot_nodeExpress.png" alt="Node Express" class="h-20 w-20 rounded-xl object-contain" />
                  <div>
                    <h4 class="text-2xl font-semibold text-slate-950">Developing Back-End Apps with Node.js & Express</h4>
                    <p class="mt-1 text-sm text-slate-600">IBM / Coursera</p>
                  </div>
                </div>
                <div class="mt-4 text-slate-700 space-y-2">
                  <p><span class="font-semibold">Issued:</span> May 2026</p>
                  <p><span class="font-semibold">Credential ID:</span> WWPFUV66WDTI</p>
                  <p><span class="font-semibold">Skills:</span> Node.js, Express, async patterns, npm</p>
                  <p><span class="font-semibold">Summary (what I learned):</span> Built server-side apps, managed packages with npm, and used asynchronous patterns to handle I/O and scale services.</p>
                  <p><a href="https://www.coursera.org/account/accomplishments/verify/WWPFUV66WDTI" target="_blank" class="inline-block mt-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-700">View certificate</a></p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h3 class="text-xl font-semibold text-slate-800">Additional / Professional Development</h3>
            <div class="mt-4 grid gap-6 sm:grid-cols-2">
              <!-- WordPress -->
              <article appScrollReveal class="group rounded-2xl border border-black/5    p-8 shadow-md transform transition hover:scale-101 hover:shadow-lg" style="animation-delay: 0.20s;">
                <div class="flex items-center gap-4">
                  <img src="/Copilot_wordpress.png" alt="WordPress" class="h-20 w-20 rounded-xl object-contain" />
                  <div>
                    <h4 class="text-2xl font-semibold text-slate-950">WordPress Website Development</h4>
                    <p class="mt-1 text-sm text-slate-600">LearnKartS / Coursera</p>
                  </div>
                </div>
                <div class="mt-4 text-slate-700 space-y-2">
                  <p><span class="font-semibold">Issued:</span> May 2026</p>
                  <p><span class="font-semibold">Credential ID:</span> X3J0L7WKY5CR</p>
                  <p><span class="font-semibold">Skills:</span> Theme & plugin customization, performance, SEO basics</p>
                  <p><span class="font-semibold">Summary (what I learned):</span> Built customizable WordPress sites, improved load performance, and applied basic SEO and hosting practices.</p>
                  <p><a href="https://www.coursera.org/account/accomplishments/verify/X3J0L7WKY5CR" target="_blank" class="inline-block mt-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-700">View certificate</a></p>
                </div>
              </article>

              <!-- Teach English -->
              <article appScrollReveal class="group rounded-2xl border border-black/5    p-8 shadow-md transform transition hover:scale-101 hover:shadow-lg" style="animation-delay: 0.22s;">
                <div class="flex items-center gap-4">
                  <img src="/Copilot_english.png" alt="Teach English" class="h-20 w-20 rounded-xl object-contain" />
                  <div>
                    <h4 class="text-2xl font-semibold text-slate-950">Teach English Now! — Foundational Principles</h4>
                    <p class="mt-1 text-sm text-slate-600">Arizona State University / Coursera</p>
                  </div>
                </div>
                <div class="mt-4 text-slate-700 space-y-2">
                  <p><span class="font-semibold">Issued:</span> Nov 2020</p>
                  <p><span class="font-semibold">Credential ID:</span> D3Z58VREYVV7</p>
                  <p><span class="font-semibold">Skills:</span> Instructional design, learner engagement, assessment</p>
                  <p><span class="font-semibold">Summary (what I learned):</span> Explored foundational teaching strategies, learner motivation, and assessment techniques for effective instruction.</p>
                  <p><a href="https://www.coursera.org/account/accomplishments/verify/D3Z58VREYVV7" target="_blank" class="inline-block mt-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow hover:bg-cyan-700">View certificate</a></p>
                </div>
              </article>
            </div>
          </section>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CertificationsComponent {}