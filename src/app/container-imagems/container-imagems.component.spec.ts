import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerImagemsComponent } from './container-imagems.component';

describe('ContainerImagemsComponent', () => {
  let component: ContainerImagemsComponent;
  let fixture: ComponentFixture<ContainerImagemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerImagemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerImagemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
