// auth.service.ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'zakaria', password: 'zakaria', role: 'user' },
    { username: 'zouhair', password: 'zouhair', role: 'user' },
    // ... autres utilisateurs
  ];

  loggedIn = false;
  currentUser: any;
  userRole: string = '';  // Ajoutez cette ligne

  logIn(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedIn = true;
      this.currentUser = user;
      this.userRole = user.role;  // Initialisez la propriété userRole
      return true;
    }
    return false;
  }

  logOut() {
    this.loggedIn = false;
    this.currentUser = null;
    this.userRole = '';  // Réinitialisez également userRole
  }

  isLogged(): boolean {
    return this.loggedIn;
  }
  

  isAdmin(): boolean {
    return this.loggedIn && this.userRole === 'admin';
  }
  
  isuser(): boolean {
    return this.loggedIn;
  }

  constructor() {
    this.loggedIn = false;
  }
}
