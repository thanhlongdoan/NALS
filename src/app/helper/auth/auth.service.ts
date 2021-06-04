import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/model/login/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  /**
   * Perform login
   * @param login Login model
   */
  login(login: Login) {
    this.http.post<any>('api/login', login).subscribe((data) => {
      if (data?.token) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
      } else {
        this.toastr.error('Login failed');
      }
    });
  }

  /**
   * Perform logout
   */
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  /**
   * Get token from localStorage
   * @returns token
   */
  getToken() {
    return localStorage.getItem('token');
  }
}
