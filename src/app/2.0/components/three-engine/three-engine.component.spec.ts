import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeEngineComponent } from './three-engine.component';

describe('ThreeEngineComponent', () => {
  let component: ThreeEngineComponent;
  let fixture: ComponentFixture<ThreeEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeEngineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
