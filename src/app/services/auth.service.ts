import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private readonly http: HttpClient) { }

  BASIC_URL: string = "https://jsonplaceholder.typicode.com/users?email"
  user: User[] = [];
  error: string ='';

  /* EXAMPLE: Sincere@april.biz */
  login(email: string) {
    return this.http.get<User[]>(`${this.BASIC_URL}=${email}`)
  }

  logout() {
    localStorage.removeItem('user');
    this.user = []
    this.router.navigate(['/login']);
  }

  register(email: string, password: string) {

  }
}
