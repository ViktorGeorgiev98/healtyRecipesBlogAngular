import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/userService.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router, private userService: UserService) {}
  
  get isUserLoggedIn(): boolean {
    return this.userService.isUserLoggedIn();
  }

  logoutHandler() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  
}
