import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  readonly toasts = signal<Toast[]>([]);

  private toastIdCounter = 0;

  showToast(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success', duration = 3000) {
    const id = `toast-${++this.toastIdCounter}`;
    const toast: Toast = { id, message, type, duration };
    
    this.toasts.update(toasts => [...toasts, toast]);

    if (duration > 0) {
      setTimeout(() => this.removeToast(id), duration);
    }
  }

  removeToast(id: string) {
    this.toasts.update(toasts => toasts.filter(t => t.id !== id));
  }

  success(message: string, duration?: number) {
    this.showToast(message, 'success', duration);
  }

  error(message: string, duration?: number) {
    this.showToast(message, 'error', duration);
  }

  warning(message: string, duration?: number) {
    this.showToast(message, 'warning', duration);
  }

  info(message: string, duration?: number) {
    this.showToast(message, 'info', duration);
  }
}
