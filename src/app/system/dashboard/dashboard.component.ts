import { Component } from '@angular/core';
import { AuthService } from 'src/app/helper/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}
  /**
   * Call method login in auth service
   */
  logout() {
    this.authService.logout();
  }
}
