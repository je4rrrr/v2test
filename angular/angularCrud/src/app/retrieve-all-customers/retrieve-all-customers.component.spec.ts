import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveAllCustomersComponent } from './retrieve-all-customers.component';

describe('RetrieveAllCustomersComponent', () => {
  let component: RetrieveAllCustomersComponent;
  let fixture: ComponentFixture<RetrieveAllCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveAllCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
