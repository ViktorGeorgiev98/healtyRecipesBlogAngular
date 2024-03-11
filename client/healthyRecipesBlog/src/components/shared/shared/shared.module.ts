import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from '../ErrorPage/error-page/error-page.component';
import { AppRoutingModule } from '../../../routing/app-routing/app-routing.module';



@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [ErrorPageComponent]
})
export class SharedModule { }
