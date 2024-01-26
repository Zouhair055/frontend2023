
//app.component.ts
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { AssignmentsService } from './shared/assignments.service';
import { SearchService } from './shared/search.service';

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

  constructor(public authService: AuthService, private router: Router, private assignmentsService: AssignmentsService, private searchService: SearchService) {}

  
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
  closeSidenav() {
    this.sidenav.close();
  }

  isAdminLoggedIn(): boolean {
    return this.authService.loggedIn && this.authService.userRole === 'admin';
  }
  peuplerBD() {
    this.assignmentsService.peuplerBDavecForkJoin()
      .subscribe(() => {
        console.log("LA BD A ETE PEUPLEE, TOUS LES ASSIGNMENTS AJOUTES, ON RE-AFFICHE LA LISTE");
        window.location.reload();
        this.router.navigate(['/assignments-details/:id']);
      })
  }

  deleteAllAssignments() {
    this.assignmentsService.deleteAllAssignments().subscribe(() => {
      console.log("Tous les devoirs ont été supprimés");
      window.location.reload();
      this.router.navigate(['/assignments-details/:id']);
    });
  }
}