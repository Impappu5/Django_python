import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private apiUrl = 'http://127.0.0.1:8000/api/contact/';

  constructor(private http: HttpClient) { }

  contactFeedback(data: any) {
    return this.http.post(this.apiUrl, data);
  }


}
