import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutloanComponent } from './aboutloan.component';

describe('AboutloanComponent', () => {
  let component: AboutloanComponent;
  let fixture: ComponentFixture<AboutloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
