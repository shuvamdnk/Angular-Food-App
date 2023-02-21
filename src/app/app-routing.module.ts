import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FoodComponent } from './food/food.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import {CheckOutComponent} from './check-out/check-out.component';
import { LocationsComponent } from './locations/locations.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes = [
  {
    path:'',
    component:SearchBarComponent
  },
  {
    path:'location/:id',
    component:LocationsComponent
  },
  {
    path:'restaurant/:id',
    component:RestaurantComponent
  },
  {
    path:'signup',
    component:UserSignupComponent
  },
  {
    path:'food/:id',
    component:FoodComponent
  },
  {
    path:'food-details/:id',
    component:FoodDetailsComponent
  },
  {
    path:'check-out',
    component:CheckOutComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
