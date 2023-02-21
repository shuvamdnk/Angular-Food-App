import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LocationService} from '../services/location.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html', 
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  id:any
  restaurant:any
  constructor(private route:ActivatedRoute,private res:LocationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getResturant();
  }

  getResturant(){
    this.res.getRes(this.id).subscribe(data => {
      console.log(data);
      this.restaurant = data;
    });
  }

}
