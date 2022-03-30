import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {MenubarModule} from "primeng/menubar";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MenuService} from "./services/menuservice";
import {MatDialogModule} from "@angular/material/dialog";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MenubarModule,
        MatDialogModule
      ],
      declarations: [
        AppComponent,MenuComponent
      ],
      providers:[MenuService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'loanapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('loanapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('loanapp app is running!');
  });
});
