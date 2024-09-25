import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input({required: true}) email: string = '';
  @Input() password: string = '';
  errorMessage: string = '';
  user: User[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  login(){
    this.authService.login(this.email).subscribe(data => {
      this.user = [...data];
      if (this.user.length === 0) this.errorMessage = 'Usuario no registrado!'

      if (this.user.length > 0 && this.password === '123456') {
        const userString = JSON.stringify(this.user[0]);  // Convertir objeto a JSON
        localStorage.setItem('user', userString); // Guardar en localStorage
        this.router.navigate(['/feed']);
      } else {
        this.errorMessage = 'correo o contraseña equivocada';
      }
    });
  }
}
