import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
