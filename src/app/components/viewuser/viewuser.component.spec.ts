import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpacientesComponent } from './viewpacientes.component';

describe('ViewpacientesComponent', () => {
  let component: ViewpacientesComponent;
  let fixture: ComponentFixture<ViewpacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
