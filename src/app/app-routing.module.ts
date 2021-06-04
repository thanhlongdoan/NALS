import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/auth/auth.guard';
import { DashboardComponent } from './system/dashboard/dashboard.component';
import { LoginComponent } from './system/login/login.component';
import { RegistrationComponent } from './system/registration/registration.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent, canActivate : [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
