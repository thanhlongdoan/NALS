import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/helper/auth/auth.service';
import { Login } from 'src/app/model/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model = new Login('admin', 'admin');

  constructor(private authService: AuthService) {}

  onSubmit(f: NgForm) {
    this.authService.login(this.model);
  }
}
