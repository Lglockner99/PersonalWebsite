import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-floating-pictures',
  templateUrl: './floating-pictures.component.html',
  styleUrls: ['./floating-pictures.component.css']
})
export class FloatingPicturesComponent implements OnInit {

  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    if (this.carousel) {
      let currentIndex: number = 0;
      const slides: NodeListOf<HTMLDivElement> = this.carousel.nativeElement.querySelectorAll('.slide');
      const totalSlides: number = slides.length;
  
      function showSlide(index: number): void {
        slides.forEach((slide: HTMLDivElement, i: number) => {
          slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
      }
  
      function nextSlide(): void {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
      }
  
      setInterval(nextSlide, 3000); // Change slide every 3 seconds
    } else {
      console.error('Carousel element not found.');
    }
  }
  
}
