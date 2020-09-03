import { Injectable } from '@angular/core';
import { dummyRestaurants } from './../restaurant/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  getRestaurants() {
    return dummyRestaurants;
  }

  getRestaurant(slug: string) {
    const restaurants = dummyRestaurants;

    for (const restaurant of restaurants) {
      if (restaurant.slug === slug) {
        return restaurant;
      }
    }
    return '{ code: "404", message: "Resource not found"}';
  }
}
