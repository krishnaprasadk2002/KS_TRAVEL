import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-window',
  standalone: true,
  imports: [],
  templateUrl: './authentication-window.component.html',
  styleUrl: './authentication-window.component.css'
})
export class AuthenticationWindowComponent {
  private router = inject(Router)

  openLoginModal(userType: 'owner' | 'user'): void {
    if(userType == 'user'){
      this.router.navigate(['/login'])
    }
    console.log(`Opening login modal for ${userType}`);
    // Implement login modal logic here
  }

  openRegisterModal(userType: 'owner' | 'user'): void {
    console.log(`Opening registration modal for ${userType}`);
    // Implement registration modal logic here
  }
}
