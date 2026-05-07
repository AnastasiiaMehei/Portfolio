import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ],
  template: `
    <div class="fixed top-4 right-4 z-[9999] space-y-2">
      <div
        *ngFor="let toast of toastService.toasts()"
        @toastAnimation
        [ngClass]="{
          'bg-green-500': toast.type === 'success',
          'bg-red-500': toast.type === 'error',
          'bg-yellow-500': toast.type === 'warning',
          'bg-blue-500': toast.type === 'info'
        }"
        class="rounded-lg shadow-lg px-4 py-3 text-white max-w-sm"
      >
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium">{{ toast.message }}</p>
          <button
            type="button"
            (click)="toastService.removeToast(toast.id)"
            class="ml-4 text-white/80 hover:text-white transition"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  `
})
export class ToastContainerComponent {
  protected readonly toastService = inject(ToastService);
}
