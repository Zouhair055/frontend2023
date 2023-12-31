import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  userRole: string = '';

  setUserRole(role: string) {
    this.userRole = role;
  }

  constructor() { }

  logIn(userRole: string) {
    this.loggedIn = true;
    this.userRole = userRole;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const isUserAdmin = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return isUserAdmin;
  }
  isuser() {
    const isUser = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return isUser;
  }
  
}
