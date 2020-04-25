import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBemvindosComponent } from './container-bemvindos.component';

describe('ContainerBemvindosComponent', () => {
  let component: ContainerBemvindosComponent;
  let fixture: ComponentFixture<ContainerBemvindosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBemvindosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBemvindosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
