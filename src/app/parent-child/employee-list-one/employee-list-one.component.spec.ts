import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListOneComponent } from './employee-list-one.component';

describe('EmployeeListOneComponent', () => {
  let component: EmployeeListOneComponent;
  let fixture: ComponentFixture<EmployeeListOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
