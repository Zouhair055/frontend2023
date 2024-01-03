import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();

  onSubmit() {
    const isLoginSuccessful = this.authService.logIn(this.username, this.password);
  
    if (isLoginSuccessful) {
      this.loginSuccess.emit();
      this.close.emit();
      // Redirigez l'utilisateur vers la page souhaitée après la connexion
      this.router.navigate(['/assignments-details/:id']);
    } else {
      // Gérez le cas où la connexion échoue, par exemple, en affichant un message d'erreur.
    }
  }
  constructor(private authService: AuthService, private router:Router) { }
}
