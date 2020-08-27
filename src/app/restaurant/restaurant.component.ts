import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fapp-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public RestTitle = 'My Restaurant';
  constructor() { }

  ngOnInit() {
  }

}
