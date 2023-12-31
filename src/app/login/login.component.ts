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
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.logIn('admin');
      this.loginSuccess.emit(); 
      this.close.emit(); 
      this.router.navigate(['/home']);
    } else if (this.username === 'user' && this.password === 'user') {
      this.authService.logIn('user');
      this.loginSuccess.emit(); 
      this.close.emit(); 
      this.router.navigate(['/home']);
    }
  }
  constructor(private authService: AuthService, private router:Router) { }
}
