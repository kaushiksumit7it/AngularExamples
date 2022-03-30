import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanlibraryComponent } from './loanlibrary.component';

describe('LoanlibraryComponent', () => {
  let component: LoanlibraryComponent;
  let fixture: ComponentFixture<LoanlibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanlibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
