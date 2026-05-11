import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { AnimatedCardDirective } from './animated-card.directive';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [CommonModule, ScrollRevealDirective, AnimatedCardDirective],
  template: `
    <section appScrollReveal class="px-4 py-10 sm:px-6">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-8 lg:grid-cols-[1fr_260px]">
          <div class="animated-card rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10 bg-gradient-to-br from-[#d4ecda] via-[#f4fdf6] to-[#b9cdbe]">
            <div class="text-center mb-8">
              <h1 class="text-4xl font-bold text-slate-950">Anastasiia Zlahodukh</h1>
              <p class="text-xl text-slate-700 mt-2">Full Stack Developer</p>
            </div>

            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-slate-950 mb-4">Summary</h2>
              <p class="text-slate-700">
                Result-oriented MERN Developer, detail-focused and committed to quality. Passionate \n about growth  and eager to contribute to innovative projects.
              </p>
            </div>

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

            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-slate-950 mb-4">Soft Skills</h2>
              <ul class="text-slate-700 space-y-1">
                <li>Attention to detail</li>
                <li>Time management</li>
                <li>Teamwork</li>
              </ul>
            </div>

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
                    <a href="https://github.com/AnastasiiaMehei/MediaShelfFE" target="_blank" class="text-blue-600 hover:underline">Repository</a>
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

          <aside class="space-y-6 rounded-[2rem] border border-black/10 bg-white/90 p-6 shadow-xl shadow-black/10 lg:sticky lg:top-24 lg:self-start">
            <div class="space-y-3">
              <h2 class="text-xl font-semibold text-slate-950">Download Resume</h2>
              <p class="text-sm text-slate-600">Choose the format you need for your resume.</p>
            </div>
            <button type="button" (click)="downloadResume('pdf')" class="w-full rounded-full bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-500">
              <span class="material-symbols-outlined mr-2 align-middle">download</span>
              Download PDF
            </button>
            <button type="button" (click)="downloadResume('doc')" class="w-full rounded-full bg-slate-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-slate-600">
              <span class="material-symbols-outlined mr-2 align-middle">download</span>
              Download Word
            </button>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ResumeComponent {
  protected readonly resumeText = `Anastasiia Zlahodukh\nFull Stack Developer\n\nSummary\nResult-oriented MERN Developer, detail-focused and committed to quality. Passionate \n about growth and eager to contribute to innovative projects.\n\nContacts\nPhone: +380961914540\nEmail: anastasiamegei@ukr.net\nLinkedIn: https://www.linkedin.com/in/anastasiia-zlahodukh/\nGitHub: https://github.com/AnastasiiaMehei/\nLocation: Kyiv, Ukraine\n\nTech Skills\nNode.js, Express.js, MongoDB, React, React Native, Angular, Vue, Remix, Redux, Next.js, \n TypeScript,  Tailwind, MUI\n\nWork Experience\n2024 - 2026 FullStack Developer\n- Developing responsive, pixel-perfect UI components using React and TypeScript\n- Integrating front-end components with APIs and third-party libraries\n- Contributing to backend with Node.js (API endpoints, controllers)\n- Collaborating with design and QA teams\n- Promoting best practices in frontend architecture and maintainability\n\nEducation\n2023 - 2024 Fullstack Developer, IT School GoIT\n\nSoft Skills\nAttention to detail, Time management, Teamwork`;

  protected downloadResume(format: 'pdf' | 'doc'): void {
    if (format === 'doc') {
      const blob = new Blob([this.resumeText], { type: 'application/msword' });
      this.triggerDownload(blob, 'Anastasiia_Zlahodukh_Resume.doc');
      return;
    }

    const blob = new Blob([this.buildPdfFile(this.resumeText)], { type: 'application/pdf' });
    this.triggerDownload(blob, 'Anastasiia_Zlahodukh_Resume.pdf');
  }

  private triggerDownload(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  private buildPdfFile(text: string): ArrayBuffer {
    const lines = text.split('\n').map(line => line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)'));
    const contentLines = ['BT', '/F1 12 Tf', '72 760 Td'];
    lines.forEach((line, index) => {
      contentLines.push(`(${line}) Tj`);
      if (index < lines.length - 1) {
        contentLines.push('0 -16 Td');
      }
    });
    contentLines.push('ET');
    const contentStream = contentLines.join('\n');
    const stream = `<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream\n`;

    const objects = [
      '%PDF-1.3',
      `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`,
      `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj`,
      `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj`,
      `4 0 obj\n${stream}endobj`,
      `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`
    ];

    let offset = 0;
    const encoded = new TextEncoder();
    const xrefLines = ['xref', '0 6', '0000000000 65535 f '];
    const objectOffsets: number[] = [];

    for (const obj of objects) {
      objectOffsets.push(offset);
      offset += encoded.encode(`${obj}\n`).length;
    }

    objectOffsets.forEach(off => {
      xrefLines.push(off.toString().padStart(10, '0') + ' 00000 n ');
    });

    const trailer = `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${offset}\n%%EOF\n`;
    const fullPdf = `${objects.join('\n')}\n${xrefLines.join('\n')}\n${trailer}`;
    return encoded.encode(fullPdf).buffer;
  }
}
