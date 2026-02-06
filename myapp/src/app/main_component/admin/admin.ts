import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicess/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe(
      data => this.users = data,
      error => console.error('Access Denied. Only superuser can view all users.', error)
    );
  }

}
