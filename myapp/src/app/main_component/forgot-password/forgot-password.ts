import { Component } from '@angular/core';
import { AuthService } from '../../../servicess/auth-service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {

   email = '';

  constructor(private authService: AuthService,private toastr:ToastrService) {}

  send() {
    this.authService.forgotPassword(this.email).subscribe(() => {
      this.toastr.success("Send link your mail, Please check ")
    });
  }
}
