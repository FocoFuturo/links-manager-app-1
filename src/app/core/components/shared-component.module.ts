import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [ToolbarComponent],
})
export class SharedComponentModule {}
