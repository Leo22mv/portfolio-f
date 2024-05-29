import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtnComponent } from './utn.component';

describe('UtnComponent', () => {
  let component: UtnComponent;
  let fixture: ComponentFixture<UtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
