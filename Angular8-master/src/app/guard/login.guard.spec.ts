import { TestBed, async, inject } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { LoginGuard } from './login.guard';
import {AuthService} from "../services/authservice";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [LoginGuard,AuthService]
    });
  });

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
