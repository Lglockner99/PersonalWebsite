import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingPicturesComponent } from './floating-pictures.component';

@NgModule({
  declarations: [
    FloatingPicturesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FloatingPicturesComponent // Export the component
  ]
})
export class FloatingPicturesModule { }
