import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import gsap from 'gsap';
import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavBarComponent,FooterComponent,PhotoGalleryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website-angular';
}


const isBrowser = typeof window !== 'undefined';
const isTouchDevice = isBrowser ? 'ontouchstart' in window : false;

const createCursorFollower = () => {
  if (!isBrowser) {
    return; // Don't proceed if not in the browser environment
  }

  const $el = document.querySelector('.cursor-follower');
  
  // Each time the mouse coordinates are updated, we need to pass the values to gsap in order to animate the element
  window.addEventListener('mousemove', (e) => {
    const { x, y } = e;

    gsap.to($el, {
      x: x + 3,
      y: y + 3,
      duration: 0.7,
      ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
      opacity: 1,
      transform: `scale(${1})`,
    });
  });

  document.addEventListener('mouseleave', (e) => {
    gsap.to($el, {
      duration: 0.7,
      opacity: 0,
    });
  });
}

// Only create the cursor follower if the device isn't touchable and the code is running in the browser
if (isBrowser && !isTouchDevice) {
  createCursorFollower();
}