import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CreateRecipeComponent } from "../components/Recipes/CreateRecipe/create-recipe/create-recipe.component";
import { CoreModule } from "../components/core/core/core.module";
import { UserModule } from "../components/User/user/user.module";
import { SharedModule } from "../components/shared/shared/shared.module";
import { AppRoutingModule } from "../routing/app-routing/app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, NgModel } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
      BrowserModule,
      CoreModule,
      SharedModule,
      UserModule,
      AppRoutingModule,
      CreateRecipeComponent,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule
      // ɵBrowserAnimationBuilder
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}