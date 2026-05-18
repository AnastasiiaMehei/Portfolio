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

        <div class="grid gap-6">


          <article appScrollReveal class="animated-card rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10" style="animation-delay: 0.18s;">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 class="text-2xl font-semibold text-slate-950">FULLSTACK developer course at GoIT</h2>
                <p class="mt-2 text-sm text-slate-600">GoIT - start your career in IT</p>
              </div>
              <img src="/Copilot_goit.png" alt="GoIT certification" class="h-32 w-32 rounded-3xl p-3 object-contain" />
            </div>
            <div class="mt-6 space-y-2 text-slate-700">
              <p><span class="font-semibold">Issued:</span> Oct 2023 · <span class="font-semibold">Expires:</span> Sep 2024</p>
              <p><span class="font-semibold">Credential ID:</span> 31881</p>
              <p><span class="font-semibold">Skills:</span> Soft Skills, HTML/CSS Validation, JavaScript, React.js, Node.js, TypeScript, Career Skills</p>
              <p><a href="https://drive.google.com/file/d/1lK04vzdDebmumkgAs5Lim0beuBAji-X6/view" target="_blank" class="text-cyan-600 hover:underline">View credential</a></p>
            </div>
          </article>
          


          <article appScrollReveal class="animated-card rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10" style="animation-delay: 0.12s;">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 class="text-2xl font-semibold text-slate-950">Node.js & MongoDB: Developing Back-end Database Applications</h2>
                <p class="mt-2 text-sm text-slate-600">IBM</p>
              </div>
              <img src="/Copilot_nodeMongo.png" alt="Node.js and MongoDB certification" class="h-32 w-32 rounded-3xl  p-3 object-contain" />
            </div>
            <div class="mt-6 space-y-2 text-slate-700">
              <p><span class="font-semibold">Issued:</span> May 2026</p>
              <p><span class="font-semibold">Credential ID:</span> 3XK9QB9DTXCO</p>
              <p><span class="font-semibold">Skills:</span> Node.js, MongoDB</p>
              <p><a href="https://www.coursera.org/account/accomplishments/verify/3XK9QB9DTXCO" target="_blank" class="text-cyan-600 hover:underline">View certificate</a></p>
            </div>
          </article>


          <article appScrollReveal class="animated-card rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10" style="animation-delay: 0.24s;">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 class="text-2xl font-semibold text-slate-950">Developing Back-End Apps with Node.js and Express</h2>
                <p class="mt-2 text-sm text-slate-600">IBM</p>
              </div>
              <img src="/Copilot_nodeExpress.png" alt="Node.js and Express certification" class="h-32 w-32 rounded-3xl p-3 object-contain" />
            </div>
            <div class="mt-6 space-y-2 text-slate-700">
              <p><span class="font-semibold">Issued:</span> May 2026</p>
              <p><span class="font-semibold">Credential ID:</span> WWPFUV66WDTI</p>
              <p><span class="font-semibold">Skills:</span> Node.js, Express.js</p>
              <p><a href="https://www.coursera.org/account/accomplishments/verify/WWPFUV66WDTI" target="_blank" class="text-cyan-600 hover:underline">View certificate</a></p>
            </div>
          </article>
  <article appScrollReveal class="animated-card rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10" style="animation-delay: 0.30s;">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 class="text-2xl font-semibold text-slate-950">WordPress Website Development Course</h2>
                <p class="mt-2 text-sm text-slate-600">LearnKartS</p>
              </div>
              <img src="/Copilot_wordpress.png" alt="WordPress Website Development certification" class="h-32 w-32 rounded-3xl p-3 object-contain" />
            </div>
            <div class="mt-6 space-y-2 text-slate-700">
              <p><span class="font-semibold">Issued:</span> May 2026</p>
              <p><span class="font-semibold">Credential ID:</span> X3J0L7WKY5CR</p>
              <p><a href="https://www.coursera.org/account/accomplishments/verify/X3J0L7WKY5CR" target="_blank" class="text-cyan-600 hover:underline">View certificate</a></p>
            </div>
          </article>

                    <article appScrollReveal class="animated-card rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10" style="animation-delay: 0.05s;">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 class="text-2xl font-semibold text-slate-950">Teach English Now! Foundational Principles</h2>
                <p class="mt-2 text-sm text-slate-600">Arizona State University</p>
              </div>
              <img src="/Copilot_english.png" alt="English certification" class="h-32 w-32 rounded-3xl p-3 object-contain" />
            </div>
            <div class="mt-6 space-y-2 text-slate-700">
              <p><span class="font-semibold">Issued:</span> Nov 2020</p>
              <p><span class="font-semibold">Credential ID:</span> D3Z58VREYVV7</p>
              <p><a href="https://www.coursera.org/account/accomplishments/verify/D3Z58VREYVV7" target="_blank" class="text-cyan-600 hover:underline">View certificate</a></p>
            </div>
          </article>

        
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CertificationsComponent {}
