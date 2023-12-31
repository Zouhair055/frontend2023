
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion des assignments !!!';

  get isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  constructor(public authService: AuthService, private router: Router) {}

  
login() {
  if (!this.authService.loggedIn) {
    this.router.navigate(['/login']); 
  } else {
    this.authService.logOut();
    this.router.navigate(['/home']);
  }
}

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }

  showLoginDialog: boolean = false;

  openLoginDialog() {
    this.showLoginDialog = true;
  }

  closeLoginDialog() {
    this.showLoginDialog = false;
  }

  onLoginSuccess() {
    this.closeLoginDialog();
  }
}
