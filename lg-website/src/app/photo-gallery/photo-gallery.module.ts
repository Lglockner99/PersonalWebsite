import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PhotoGalleryComponent } from './photo-gallery.component';

@NgModule({
  declarations: [
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    PhotoGalleryComponent
  ]
})
export class PhotoGalleryModule { }
