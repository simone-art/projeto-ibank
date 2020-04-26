import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerImagensDosComponent } from './container-imagens-dos.component';

describe('ContainerImagensDosComponent', () => {
  let component: ContainerImagensDosComponent;
  let fixture: ComponentFixture<ContainerImagensDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerImagensDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerImagensDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
