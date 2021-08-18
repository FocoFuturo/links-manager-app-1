import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLinksPageComponent } from './pages/users-links-page/users-links-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersLinksPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserLinkRoutingModule {}
