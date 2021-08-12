import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';

const routes: Routes = [
  {
    path: 'my-account',
    component: MyAccountPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserRoutingModule {}
