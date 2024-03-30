import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/userService.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  animations: [
    trigger('myAnimationTrigger', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
      ]),
    ]),
  ],
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
