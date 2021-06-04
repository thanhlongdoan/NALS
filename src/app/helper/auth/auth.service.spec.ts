import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClient: HttpClient;
  let router: jasmine.SpyObj<Router>;
  let toastr: ToastrService;

  beforeEach(() => {
    service = new AuthService(httpClient, router, toastr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get value of token', () => {
    let token = 'eyJhbGciOiJIUzI1';
    localStorage.setItem('token', token);

    let result = service.getToken();

    expect(result).toEqual(token);
  });
});
