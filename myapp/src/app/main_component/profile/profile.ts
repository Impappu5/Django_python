import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../../servicess/user-register';
import { Router } from '@angular/router';
import { AuthService } from '../../../servicess/auth-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe, NgIf,FormsModule],

  templateUrl: './profile.html',
  styleUrl: './profile.css',

})
export class Profile {

  user$!: Observable<any>;
  editMode = false;
  editUser: any = {};
  message = '';
  constructor( private router: Router, private http: HttpClient, private toastr:ToastrService, private authService:AuthService) {

  }

  // ngOnInit() {
  //   this.user$ = this.authService.getProfile();
  // }

   ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.user$ = this.authService.getProfile();
  }

  openEdit(user: any) {
    this.editMode = true;
    this.editUser = { ...user }; // copy data
  }

  cancelEdit() {
    this.editMode = false;
    this.editUser = {};
  }

  saveProfile() {
    this.authService.updateProfile(this.editUser).subscribe({
      next: (res: any) => {
      this.toastr.success('Profile updated successfully', 'Success');
      this.editMode = false;
      this.editUser = {};
      this.loadProfile(); // refresh table
    },
    error: (err) => {
      this.toastr.error('Profile update failed', 'Error');
    }
    });
  }


 
}


