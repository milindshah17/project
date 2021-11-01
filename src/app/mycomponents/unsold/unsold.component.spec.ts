import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsoldComponent } from './unsold.component';

describe('UnsoldComponent', () => {
  let component: UnsoldComponent;
  let fixture: ComponentFixture<UnsoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
