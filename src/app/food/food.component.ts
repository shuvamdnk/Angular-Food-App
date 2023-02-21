import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LocationService} from '../services/location.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  id:any;
  foods:any;
  constructor(private route:ActivatedRoute,private food:LocationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFoods();
  }

  getFoods(){
    this.food.getFood(this.id).subscribe(data => {
      this.foods = data;
    })
  }

}
