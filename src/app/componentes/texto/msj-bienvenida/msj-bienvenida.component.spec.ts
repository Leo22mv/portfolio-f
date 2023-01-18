import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjBienvenidaComponent } from './msj-bienvenida.component';

describe('MsjBienvenidaComponent', () => {
  let component: MsjBienvenidaComponent;
  let fixture: ComponentFixture<MsjBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjBienvenidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsjBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
