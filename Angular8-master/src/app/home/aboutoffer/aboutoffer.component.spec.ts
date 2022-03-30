import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutofferComponent } from './aboutoffer.component';

describe('AboutofferComponent', () => {
  let component: AboutofferComponent;
  let fixture: ComponentFixture<AboutofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
