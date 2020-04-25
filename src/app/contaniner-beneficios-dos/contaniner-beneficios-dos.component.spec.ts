import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaninerBeneficiosDosComponent } from './contaniner-beneficios-dos.component';

describe('ContaninerBeneficiosDosComponent', () => {
  let component: ContaninerBeneficiosDosComponent;
  let fixture: ComponentFixture<ContaninerBeneficiosDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaninerBeneficiosDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaninerBeneficiosDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
