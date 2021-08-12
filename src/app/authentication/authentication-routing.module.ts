import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent,
  },
  {
    path: 'reset-password/:id',
    component: ResetPasswordPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AuthenticationRoutingModule {}
