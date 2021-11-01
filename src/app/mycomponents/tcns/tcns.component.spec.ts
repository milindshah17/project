import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcnsComponent } from './tcns.component';

describe('TcnsComponent', () => {
  let component: TcnsComponent;
  let fixture: ComponentFixture<TcnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
