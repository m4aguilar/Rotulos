import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersimpleComponent } from './footersimple.component';

describe('FootersimpleComponent', () => {
  let component: FootersimpleComponent;
  let fixture: ComponentFixture<FootersimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootersimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
