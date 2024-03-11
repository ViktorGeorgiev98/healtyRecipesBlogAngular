import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CreateRecipeComponent } from "../components/Recipes/CreateRecipe/create-recipe/create-recipe.component";
import { CoreModule } from "../components/core/core/core.module";
import { UserModule } from "../components/User/user/user.module";
import { SharedModule } from "../components/shared/shared/shared.module";
import { AppRoutingModule } from "../routing/app-routing/app-routing.module";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [
        AppComponent,
        // CreateRecipeComponent
    ],
    imports: [
      BrowserModule,
      CoreModule,
      SharedModule,
      UserModule,
      AppRoutingModule,
    //   AppComponent,
      CreateRecipeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}