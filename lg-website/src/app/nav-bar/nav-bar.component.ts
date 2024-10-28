import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})


export class NavBarComponent {
  isNavbarOpen: boolean = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
