import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotels } from '../../interfaces/hotels';
import { HotelAPIService } from '../../services/hotel-api.service';

@Component({
  selector: 'app-user-hotel-search',
  templateUrl: './user-hotel-search.component.html',
  styleUrls: ['../../styles.css','./user-hotel-search.component.css']
})
export class UserHotelSearchComponent {
  hotels: Hotels[] = [];
  i = 0;
  formSearchHotel: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private hotelAPI: HotelAPIService) {
    this.formSearchHotel = this.fb.group({
      dateIn: ['', Validators.required],
      dateOut: ['', Validators.required],
      numPersons: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.hotelAPI.getHotels().subscribe(data => this.hotels= data)
  }

  getSearchHotel(){
    return this.formSearchHotel.get('city')?.value
  }

  guardarRespuestas() {
    if (this.formSearchHotel.valid) {

      const cityHotel = this.hotels.filter(item => item.location ===this.formSearchHotel.get('city')?.value);
      console.log(cityHotel)

      if (cityHotel.length > 0){
        this.router.navigate(['user/list-search']);
      }else
        alert('Lo lamento, de momento no contamos con hoteles en esa ciudad')
    } else {
      console.log('Formulario inválido');
    }
  }
}
