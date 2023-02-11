import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpacientesComponent } from './addpacientes.component';

describe('AddpacientesComponent', () => {
  let component: AddpacientesComponent;
  let fixture: ComponentFixture<AddpacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
