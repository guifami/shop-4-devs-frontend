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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSectionComponent,
    FooterComponent,
    HomeProductsSectionComponent,
    HomePopContentComponent,
    HomeRecentProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
