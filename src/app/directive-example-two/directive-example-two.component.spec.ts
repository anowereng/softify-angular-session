import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExampleTwoComponent } from './directive-example-two.component';

describe('DirectiveExampleTwoComponent', () => {
  let component: DirectiveExampleTwoComponent;
  let fixture: ComponentFixture<DirectiveExampleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveExampleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
