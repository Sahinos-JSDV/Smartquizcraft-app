import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatserviceService {
  private apiUrl = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1';
  private apiKey = 'TU_API_KEY'; // Reemplaza con tu clave de acceso

  constructor(private http: HttpClient) {}

  generatePrompt(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    });

    const body = { inputs: prompt };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError(() => new Error('Error al generar el prompt.'));
      })
    );
  }
}