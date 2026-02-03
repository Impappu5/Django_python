import { Component } from '@angular/core';
import { AuthService } from '../../../servicess/auth-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private authService:AuthService, private router:Router,private toastr:ToastrService){}
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearTokens();
        this.router.navigate(['/login']);
        this.toastr.success('success','Logout success');

      },
      error: () => {
        // even if API fails, clear tokens
        this.authService.clearTokens();
        this.router.navigate(['/login']);
      }
    });
  }
}

 



