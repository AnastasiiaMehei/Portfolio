import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { AnimatedCardDirective } from './animated-card.directive';
import { LanguageService } from './language.service';
import { ContactService, ContactMessage } from './contact.service';
import { ToastService } from './toast.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule, ScrollRevealDirective, AnimatedCardDirective],
  template: `
    <section appScrollReveal class="px-4 py-5 sm:px-2">
     <div class="mx-auto grid max-w-6xl gap-8 grid-cols-1">
        <div class="order-2 animated-card rounded-[2rem] border border-black/10  p-8 shadow-xl shadow-black/10 sm:p-4">
          <div class="mb-8">
            <h2 class="mt-3 text-3xl font-semibold text-[#151815] sm:text-4xl">{{ labels[language()].contactFormTitle }}</h2>
          </div>

          <form [formGroup]="contactForm" (ngSubmit)="submitContact()" class="space-y-6">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>{{ labels[language()].contactFormName }}</mat-label>
              <input matInput formControlName="name" placeholder="{{ labels[language()].contactFormName }}" />
              <p class="mt-2 text-sm text-red-600" *ngIf="nameControl.invalid && (nameControl.dirty || nameControl.touched)">
                <span *ngIf="nameControl.hasError('required')">{{ labels[language()].contactFormNameRequired }}</span>
                <span *ngIf="nameControl.hasError('minlength')">{{ labels[language()].contactFormNameShort }}</span>
              </p>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>{{ labels[language()].contactFormEmail }}</mat-label>
              <input matInput type="email" formControlName="email" placeholder="{{ labels[language()].contactFormEmail }}" />
              <p class="mt-2 text-sm text-red-600" *ngIf="emailControl.invalid && (emailControl.dirty || emailControl.touched)">
                <span *ngIf="emailControl.hasError('required')">{{ labels[language()].contactFormEmailRequired }}</span>
                <span *ngIf="emailControl.hasError('email')">{{ labels[language()].contactFormEmailInvalid }}</span>
              </p>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>{{ labels[language()].contactFormMessage }}</mat-label>
              <textarea matInput formControlName="message" rows="6" placeholder="{{ labels[language()].contactFormMessage }}"></textarea>
              <p class="mt-2 text-sm text-red-600" *ngIf="messageControl.invalid && (messageControl.dirty || messageControl.touched)">
                <span *ngIf="messageControl.hasError('required')">{{ labels[language()].contactFormMessageRequired }}</span>
                <span *ngIf="messageControl.hasError('minlength')">{{ labels[language()].contactFormMessageShort }}</span>
              </p>
            </mat-form-field>

            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button mat-raised-button matTooltip="{{ labels[language()].contactFormSubmit }}" [matTooltipDisabled]="contactForm.invalid" class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition duration-200 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60 w-full sm:w-auto" [disabled]="contactForm.invalid || isSubmitting">
                <span *ngIf="isSubmitting" class="inline-flex items-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ language() === 'en' ? 'Sending...' : 'Надсилання...' }}
                </span>
                <span *ngIf="!isSubmitting">{{ labels[language()].contactFormSubmit }}</span>
              </button>
              <p *ngIf="submitMessage" class="mt-0 text-sm" [class.text-green-600]="submitMessage.includes('successfully')" [class.text-red-600]="!submitMessage.includes('successfully')">
                {{ submitMessage }}
              </p>
            </div>
          </form>
        </div>

        <aside class="visible animated-card">
          <div class="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10 sm:p-4">
            <div class="space-y-4">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="https://github.com/AnastasiiaMehei" target="_blank" rel="noopener noreferrer" matTooltip="Visit GitHub" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:bg-slate-800">
                  <img src="gitHub.png" alt="GitHub" class="w-10 h-10 mr-2" />
                  GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/anastasiia-zlahodukh/" target="_blank" rel="noopener noreferrer" matTooltip="Visit LinkedIn" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500">
                  <img src="linkdin.png" alt="LinkedIn" class="w-10 h-10 mr-2" />
                  LinkedIn
                </a>
                <a href="https://t.me/anastasiamegei" target="_blank" rel="noopener noreferrer" matTooltip="Open Telegram" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
                  <img src="telegram.png" alt="Telegram" class="w-10 h-10 mr-2" />
                  Telegram
                </a>
                <a href="viber://chat?number=+380961914540" matTooltip="Open Viber" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500">
                  <img src="viber.png" alt="Viber" class="w-10 h-10 mr-2" />
                  Viber
                </a>
                <a href="https://wa.me/380961914540" target="_blank" rel="noopener noreferrer" matTooltip="Open WhatsApp" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/30 transition hover:bg-green-500">
                  <img src="whatsUpp.png" alt="WhatsApp" class="w-10 h-10 mr-2" />
                  WhatsApp
                </a>
                <a routerLink="/resume" matTooltip="View Resume" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/30 transition hover:bg-cyan-500">
                  <img src="resume.png" alt="Resume" class="w-10 h-10 mr-2" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `,
  styles: [
    'mat-form-field { width: 100%; }',
    'textarea { resize: vertical; min-height: 10rem; }'
  ]
})
export class ContactComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly language = this.languageService.language;
  protected readonly labels = this.languageService.labels;
  private readonly contactService = inject(ContactService);
  private readonly toastService = inject(ToastService);

  protected isSubmitting = false;
  protected submitMessage = '';

  protected contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  get nameControl() {
    return this.contactForm.get('name')!;
  }

  get emailControl() {
    return this.contactForm.get('email')!;
  }

  get messageControl() {
    return this.contactForm.get('message')!;
  }

  protected async submitContact() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    const formData: ContactMessage = {
      name: String(this.contactForm.get('name')?.value || '').trim(),
      email: String(this.contactForm.get('email')?.value || '').trim(),
      message: String(this.contactForm.get('message')?.value || '').trim()
    };

    console.log('Current hostname:', location.hostname);
    console.log('Form data to send:', formData);
    console.log('Message field value:', this.contactForm.get('message')?.value);

    try {
      const response = await this.contactService.sendMessage(formData);
      const successMessage = this.language() === 'en'
        ? 'Message sent successfully!'
        : 'Повідомлення надіслано успішно!';
      this.submitMessage = successMessage;
      this.toastService.success(successMessage);
      this.contactForm.reset();
    } catch (error: any) {
      const errorMsg = error?.message || 'Unknown error';
      const errorMessage = this.language() === 'en'
        ? `Failed to send message: ${errorMsg}`
        : `Не вдалося надіслати повідомлення: ${errorMsg}`;
      this.submitMessage = errorMessage;
      this.toastService.error(errorMessage);
      console.error('Error sending message:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
