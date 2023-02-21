import { Component, OnInit } from '@angular/core';
import {LocationService} from '../services/location.service';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private user:LocationService) { }

  ngOnInit(): void {
  }

  getData(data:any){
    this.user.register(data).subscribe(data => {
      window.location.href="/";
    })
  }


  

}
