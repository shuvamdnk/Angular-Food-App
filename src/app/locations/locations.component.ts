import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LocationService} from '../services/location.service';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  id:any
  location:any
  constructor(private route:ActivatedRoute,private loc:LocationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getLoc();
  }

  getLoc(){
    this.loc.getLoc(this.id).subscribe(data => {
      this.location = data;
    })
  }

}
