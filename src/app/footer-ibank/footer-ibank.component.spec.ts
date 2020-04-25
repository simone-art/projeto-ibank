import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIbankComponent } from './footer-ibank.component';

describe('FooterIbankComponent', () => {
  let component: FooterIbankComponent;
  let fixture: ComponentFixture<FooterIbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterIbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
