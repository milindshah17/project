import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlviewComponent } from './slview.component';

describe('SlviewComponent', () => {
  let component: SlviewComponent;
  let fixture: ComponentFixture<SlviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
