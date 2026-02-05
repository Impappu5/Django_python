import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {

  }

  private apiUrl = 'http://127.0.0.1:8000/api/';


  register(data: any) {
    // return this.http.post(this.apiUrl + 'register/', data);
    return this.http.post(`${this.apiUrl}register/`, data);

  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}login/`, data);
  }
  getProfile(): Observable<any> {
    console.log('test');
    const token = localStorage.getItem('access');

    return this.http.get('http://127.0.0.1:8000/api/profile/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  profile() {
    return this.http.get(this.apiUrl + 'profile/');
  }


  ////Logout part
  logout() {
    const refresh = localStorage.getItem('refresh');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access')}`
    });

    return this.http.post(
      `${this.apiUrl}logout/`,
      { refresh: refresh },
      { headers }
    );
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


    ////add logout poins logout

    localStorage.removeItem('access');
    localStorage.removeItem('refresh');

  

  }


  }


