import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldVersionComponent } from './old-version.component';

describe('OldVersionComponent', () => {
  let component: OldVersionComponent;
  let fixture: ComponentFixture<OldVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
