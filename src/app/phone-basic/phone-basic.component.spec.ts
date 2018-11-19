import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBasicComponent } from './phone-basic.component';

describe('PhoneBasicComponent', () => {
  let component: PhoneBasicComponent;
  let fixture: ComponentFixture<PhoneBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
