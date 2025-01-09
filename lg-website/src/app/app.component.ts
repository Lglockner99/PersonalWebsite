import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';
import { ExperiencesComponent } from "./experiences/experiences.component";
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, FooterComponent, PhotoGalleryModule, ExperiencesComponent,HomepageComponent,ContactComponent,ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website-angular';
}
