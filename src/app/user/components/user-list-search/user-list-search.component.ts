import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHotelSearchComponent } from '../user-hotel-search/user-hotel-search.component';

@Component({
  selector: 'app-user-list-search',
  templateUrl: './user-list-search.component.html',
  styleUrls: ['./user-list-search.component.css']
})
export class UserListSearchComponent{

  constructor(private formH: UserHotelSearchComponent){
    console.log(this.formH.getSearchHotel)
  }
}
