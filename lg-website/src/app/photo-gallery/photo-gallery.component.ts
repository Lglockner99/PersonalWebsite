import { Component } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  photos = [
    { url: 'assets/DSCF0170.JPG'},
    { url: 'assets/DSCF0170.JPG'},
    // Add more photos here
  ];

}
