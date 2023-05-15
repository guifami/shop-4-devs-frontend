// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeSectionComponent } from './components/home/home-section/home-section.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeProductsSectionComponent } from './components/home/home-products-section/home-products-section.component';
import { HomePopContentComponent } from './components/home/home-pop-content/home-pop-content.component';
import { HomeRecentProductsComponent } from './components/home/home-recent-products/home-recent-products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainHomeComponent } from './components/home/main-home/main-home.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    NavbarComponent,
    HomeSectionComponent,
    FooterComponent,
    HomeProductsSectionComponent,
    HomePopContentComponent,
    HomeRecentProductsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
