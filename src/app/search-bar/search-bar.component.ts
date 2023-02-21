import { Component, OnInit } from '@angular/core';
import {LocationService } from '../services/location.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public cities:any =[]
  constructor(
    protected city:LocationService
  ) { }

  ngOnInit(): void {
    this.city.getCity().subscribe(data => {
      // console.log(data);
      this.cities = data;
      console.log(this.cities);
    })
  }

}
