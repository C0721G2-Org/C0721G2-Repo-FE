import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {


  constructor(private jwtHelper: JwtHelperService) {
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();

    return !this.jwtHelper.isTokenExpired(token);
  }

  signOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  saveTokenLocal(token: any) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  saveTokenSession(token: any) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  saveUserLocal(data: any) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(data));
  }

  saveUserSession(data: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(data));
  }

  getToken(): string {
    if (localStorage.getItem(TOKEN_KEY) !== null) {
      return localStorage.getItem(TOKEN_KEY);
    } else {
      return sessionStorage.getItem(TOKEN_KEY);
    }
  }

  getUser() {
    if (localStorage.getItem(USER_KEY) !== null) {
      return JSON.parse(localStorage.getItem(USER_KEY));
    } else {
      return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
  }
}

