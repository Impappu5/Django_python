import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegister } from '../../../servicess/user-register';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../servicess/auth-service';




@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  auth: any;


  constructor(private toastr: ToastrService, private router: Router, private authService: AuthService) {

  }

  onLogin() {
    console.log(this.form.value)
    this.authService.login(this.form.value).subscribe({
      next: (res: any) => {
        this.authService.saveTokens(res.access, res.refresh);
        this.toastr.success('Login successful'); // success toast
        this.router.navigate(['/profile']);
      },
      error: (err) => {
      console.log(err);
      this.toastr.error('Do not match email/password'); // error toast for wrong email/password
    }
    });
  }
  credentials(credentials: any) {
    throw new Error('Method not implemented.');
  }


  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }




  // //////Go to signup link

 



}
