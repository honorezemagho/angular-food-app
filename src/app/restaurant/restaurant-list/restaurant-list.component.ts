import { RestaurantService } from './../../core/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fapp-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  public restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService) {
    this.restaurants = restaurantService.getRestaurants();
  }

  ngOnInit() {
  }

}
