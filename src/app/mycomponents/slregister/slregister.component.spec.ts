import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlregisterComponent } from './slregister.component';

describe('SlregisterComponent', () => {
  let component: SlregisterComponent;
  let fixture: ComponentFixture<SlregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
