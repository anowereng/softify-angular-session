/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewDealerSaleComponent } from './new-dealer-sale.component';

describe('NewDealerSaleComponent', () => {
  let component: NewDealerSaleComponent;
  let fixture: ComponentFixture<NewDealerSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDealerSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDealerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
