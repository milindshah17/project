import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlsigninComponent } from './slsignin.component';

describe('SlsigninComponent', () => {
  let component: SlsigninComponent;
  let fixture: ComponentFixture<SlsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlsigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
