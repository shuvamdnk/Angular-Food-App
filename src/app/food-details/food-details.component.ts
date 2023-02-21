import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LocationService} from '../services/location.service';
@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  id:any;
  foodDetails:any
  constructor(private route:ActivatedRoute, private details:LocationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetails();
  }

  getDetails(){
    this.details.getfoodDetails(this.id).subscribe(data=>{
      this.foodDetails = data;
      console.log(this.foodDetails);
    });
  }

}
