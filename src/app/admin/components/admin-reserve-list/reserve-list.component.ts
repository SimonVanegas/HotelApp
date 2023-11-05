import { Component, OnInit } from '@angular/core';
import { Reserves } from '../../interfaces/reserves';
import { ReserveApiService } from '../../services/reserve-api.service';
import { UserApiService } from '../../services/user-api.service';
import { Users } from '../../interfaces/users';
import { Hotels } from '../../interfaces/hotels';
import { HotelAPIService } from '../../services/hotel-api.service';

@Component({
  selector: 'app-list-reserve',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.css']
})
export class ReserveListComponent implements OnInit{
  reserves: Reserves[] = [];
  users: Users[] = [];
  hotels: Hotels[] = [];
  constructor(private reserveAPI : ReserveApiService, private userAPI : UserApiService , private hotelAPI : HotelAPIService){}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.reserveAPI.getReserves().subscribe(data => this.reserves= data);
    this.userAPI.getUsers().subscribe(data => this.users= data);
    this.hotelAPI.getHotels().subscribe(data => this.hotels= data);
  }

  userName(id:number){
    const nameUser = this.users.filter(item => item.id ===id);
    if (nameUser.length > 0)
      return nameUser[0].names;
    return "Usuario no encontrado";
  }

  hotelName(id:number){
    const nameHotel = this.hotels.filter(item => item.id ===id);
    if (nameHotel.length > 0)
      return nameHotel[0].name;
    return "Hotel no encontrado";
  }

  hotelLocation(id:number){
    const locationHotel = this.hotels.filter(item => item.id ===id);
    if (locationHotel.length > 0)
      return locationHotel[0].location;
    return "Ubicación no encontrado";
  }
  showMore(id :number){}
}
