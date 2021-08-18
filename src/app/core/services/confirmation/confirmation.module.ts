import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';
import { ConfirmationComponent } from './confirmation.component';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class ConfirmationModule {}
