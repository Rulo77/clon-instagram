import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

  constructor(private http: HttpClient) { }

  getUser(): User | null{
    const userString = localStorage.getItem('user'); // Obtener el string de localStorage
    if (userString) {
      return JSON.parse(userString); // Convertir el JSON a un objeto
    }
    return null; // Si no hay datos, devolver null
  }

}
