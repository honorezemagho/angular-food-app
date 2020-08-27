import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  lead: string;
  constructor() {
    this.title = 'Food App';
    this.lead = 'Ordering Food, has never been easier';
  }

  ngOnInit() {
  }

}
