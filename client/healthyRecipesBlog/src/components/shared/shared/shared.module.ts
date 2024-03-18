import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from '../ErrorPage/error-page/error-page.component';
import { AppRoutingModule } from '../../../routing/app-routing/app-routing.module';
import { SpinnerComponent } from '../spinner/spinner/spinner.component';



@NgModule({
  declarations: [ErrorPageComponent, SpinnerComponent],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [ErrorPageComponent, SpinnerComponent]
})
export class SharedModule { }
