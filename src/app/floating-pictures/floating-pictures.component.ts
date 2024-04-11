import { Component, OnInit } from '@angular/core';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-pictures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-pictures.component.html',
  styleUrl: './floating-pictures.component.css'
})
export class FloatingPicturesComponent implements OnInit {
  pictures = [];
  ngOnInit(): void {
  }
}
