import { Injectable } from '@angular/core';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Use localhost for development, Render for production
  private readonly isDevelopment = location.hostname.includes('localhost') ||
                                   location.hostname.includes('127.0.0.1') ||
                                   location.hostname.includes('0.0.0.0') ||
                                   location.port === '4200'; // Angular dev server
  private readonly apiUrl = this.isDevelopment
    ? 'http://localhost:3000/messages'
    : 'https://portfolio-be-6hdi.onrender.com/messages';

  async sendMessage(message: ContactMessage): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      });

      const responseData = await response.json();

      if (!response.ok) {
        const errorMessage = responseData?.message || `HTTP error! status: ${response.status}`;
        throw new Error(errorMessage);
      }

      return responseData;
    } catch (error) {
      throw error;
    }
  }
}