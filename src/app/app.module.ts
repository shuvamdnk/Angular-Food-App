import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { FoodComponent } from './food/food.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import {HttpClientModule} from '@angular/common/http';
import { LocationsComponent } from './locations/locations.component';
import {FormsModule} from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    RestaurantComponent,
    UserLoginComponent,
    UserSignupComponent,
    RestaurantCardComponent,
    FoodComponent,
    FoodCardComponent,
    FoodDetailsComponent,
    CheckOutComponent,
    LocationsComponent,
    AccountComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
