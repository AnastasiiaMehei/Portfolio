import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://portfolio-be-6hdi.onrender.com/messages';

  sendMessage(message: ContactMessage): Observable<any> {
    return this.http.post(this.apiUrl, message).pipe(
      catchError(error => {
        console.error('Error sending contact message:', error);
        return throwError(() => new Error('Failed to send message'));
      })
    );
  }
}