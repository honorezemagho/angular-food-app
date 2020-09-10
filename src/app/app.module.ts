
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantListComponent,
    PageNotFoundComponent,
    HomeComponent,
    RestaurantDetailComponent,
    SearchResultComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
