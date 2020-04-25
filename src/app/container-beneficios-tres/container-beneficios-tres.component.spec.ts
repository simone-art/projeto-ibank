import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBeneficiosTresComponent } from './container-beneficios-tres.component';

describe('ContainerBeneficiosTresComponent', () => {
  let component: ContainerBeneficiosTresComponent;
  let fixture: ComponentFixture<ContainerBeneficiosTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBeneficiosTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBeneficiosTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
