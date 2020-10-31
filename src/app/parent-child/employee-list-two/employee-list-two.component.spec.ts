import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListTwoComponent } from './employee-list-two.component';

describe('EmployeeListTwoComponent', () => {
  let component: EmployeeListTwoComponent;
  let fixture: ComponentFixture<EmployeeListTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
