import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RestaurantService } from './restaurant.service';



@NgModule({
  declarations: [],
  imports: [
   HttpClientModule
  ],
  providers: [RestaurantService]
})
export class CoreModule { }
