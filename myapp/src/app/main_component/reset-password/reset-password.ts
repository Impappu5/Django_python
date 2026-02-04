import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicess/auth-service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword implements OnInit {

  password = '';
  uid!: string;
  token!: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.token = this.route.snapshot.params['token'];
  }

  reset() {
    this.authService.resetPassword({
      password: this.password,
      uidb64: this.uid,
      token: this.token
    }).subscribe(() => {
      alert('Password changed');
    });
  }
}
