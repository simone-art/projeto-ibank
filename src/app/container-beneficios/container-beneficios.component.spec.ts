import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBeneficiosComponent } from './container-beneficios.component';

describe('ContainerBeneficiosComponent', () => {
  let component: ContainerBeneficiosComponent;
  let fixture: ComponentFixture<ContainerBeneficiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBeneficiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
