import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  dropdownOpen = false;
  isLoggedIn = false;
  private elementRef = inject(ElementRef)

  constructor() {}

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }
}
