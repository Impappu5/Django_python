import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UserRegister {

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http : HttpClient){}
register(data: any) {
    return this.http.post(this.apiUrl + 'register/', data);
  }

  login(data: any) {
    return this.http.post(this.apiUrl + 'login/', data);
  }

  profile() {
    return this.http.get(this.apiUrl + 'profile/');
  }

  logout(refresh: string) {
    return this.http.post(this.apiUrl + 'logout/', { refresh });
  }

  saveTokens(access: string, refresh: string) {
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
  }

  getAccessToken() {
    return localStorage.getItem('access');
  }

  clearTokens() {
    localStorage.clear();
  }

}
