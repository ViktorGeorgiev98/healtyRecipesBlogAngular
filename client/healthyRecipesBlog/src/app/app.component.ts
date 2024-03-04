import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footerComponent/footer/footer.component';
import { NavBarComponent } from '../components/navBar/nav-bar/nav-bar.component';
import { HomePageComponent } from '../components/homePage/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavBarComponent, HomePageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'healthyRecipesBlog';
}
