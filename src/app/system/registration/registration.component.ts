import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/model/login/login.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  model = new Login('', '');

  constructor(private toastr: ToastrService) {}

  /**
   * Submite to create the account
   * @param f Form
   */
  onSubmit(f: NgForm) {
    // API not supported. So I just show warning
    this.toastr.warning('This function is not active yet');
  }
}
