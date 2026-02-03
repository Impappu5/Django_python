import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../../servicess/user-register';
import { Router } from '@angular/router';
import { AuthService } from '../../../servicess/auth-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe, NgIf],

  templateUrl: './profile.html',
  styleUrl: './profile.css',

})
export class Profile {

  user$!: Observable<any>;
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.user$ = this.authService.getProfile();
  }


 
}


