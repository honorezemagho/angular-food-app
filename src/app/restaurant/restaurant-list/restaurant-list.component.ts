import { dummyRestaurants } from './../restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fapp-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  public restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    this.restaurants = dummyRestaurants;
    console.log(this.restaurants)
  }

}
