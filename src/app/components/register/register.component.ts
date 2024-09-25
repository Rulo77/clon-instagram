import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() confirmPassword: string = '';
  errorMessage: string = '';
  succesMessage: string = '';

  constructor(private authService: AuthService) {}


  register() {
    this.succesMessage = ''

    if(this.email === ''){
      this.errorMessage = 'Correo requerido!';
      return;
    }

    if(this.password === ''){
      this.errorMessage = 'Password requerido!';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    this.authService.register(this.email, this.password);
    this.restartValues();
    this.succesMessage = 'Registro exito ahora puedes hacer login!!'
  }

  restartValues(){
    this.password = '';
    this.confirmPassword = '';
    this.email = '';
    this.errorMessage = ''
  }
}
