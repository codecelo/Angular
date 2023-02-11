import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepacientesComponent } from './updatepacientes.component';

describe('UpdatepacientesComponent', () => {
  let component: UpdatepacientesComponent;
  let fixture: ComponentFixture<UpdatepacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
