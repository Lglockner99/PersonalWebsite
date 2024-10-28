// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';
import { ExperiencesComponent } from "./experiences/experiences.component";
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },        // Default route, homepage
  { path: 'experiences', component: ExperiencesComponent },  // /experiences route
  { path: 'projects', component: ProjectsComponent }, //projects route
  { path: 'photography', component: PhotoGalleryModule }, //photography 
  { path: 'contact', component: ContactComponent },// /contact route
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route (for invalid paths), directs back to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use forRoot in the root module
  exports: [RouterModule]
})
export class AppRoutingModule { }