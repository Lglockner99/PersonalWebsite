import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingPicturesComponent } from './floating-pictures.component';

describe('FloatingPicturesComponent', () => {
  let component: FloatingPicturesComponent;
  let fixture: ComponentFixture<FloatingPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
