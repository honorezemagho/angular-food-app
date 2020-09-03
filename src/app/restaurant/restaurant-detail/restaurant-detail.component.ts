import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../core/restaurant.service';

@Component({
  selector: 'fapp-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public restaurant: any;
  constructor(private restaurantService: RestaurantService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant() {
    let slug = this.activatedRoute.snapshot.paramMap.get("id");
    this.restaurant = this.restaurantService.getRestaurant(slug);
  }


}
