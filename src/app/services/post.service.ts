import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Post } from '../models/post';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Errores del cliente o red
      console.error('Ocurrió un error inesperado:', error.error.message);
    } else {
      // El backend devolvió un error fallido
      console.error(
        `Código del servidor: ${error.status}, ` +
        `Error: ${error.message}`);
    }
    // Devuelve un observable con un mensaje de error para que el componente lo maneje
    return throwError(() => new Error('Algo salió mal; por favor, intenta nuevamente más tarde.'));
  }
}
