import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomepageComponent } from './app/homepage/homepage.component';
import { ExperiencesComponent } from './app/experiences/experiences.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { PhotoGalleryComponent } from './app/photo-gallery/photo-gallery.component';

//handles the routes and the bootstrap of the app, post angular 14
bootstrapApplication(AppComponent, {
    providers: [
      provideRouter([
        { path: '', redirectTo: 'home', pathMatch: 'full' }, //defalut
        { path: 'home', component: HomepageComponent },
        { path: 'experiences', component: ExperiencesComponent},
        { path: 'projects', component: ProjectsComponent},
        { path: 'photography', component: PhotoGalleryComponent},
        { path: '**', redirectTo: 'home' } //undefined -> back to home
      ])
    ]
  }).catch(err => console.error(err));