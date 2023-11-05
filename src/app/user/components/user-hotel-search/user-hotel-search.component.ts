import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotels } from '../../interfaces/hotels';
import { HotelAPIService } from '../../services/hotel-api.service';
import { Router } from '@angular/router';
import { FormSharingService } from '../../services/form-sharing.service';

@Component({
  selector: 'app-user-hotel-search',
  templateUrl: './user-hotel-search.component.html',
  styleUrls: ['../../styles.css','./user-hotel-search.component.css']
})
export class UserHotelSearchComponent {
  hotels: Hotels[] = [];
  filteredHotels: Hotels[] = [];
  showlist = false;
  formSearchHotel: FormGroup;
  constructor(private fb: FormBuilder, private hotelAPI: HotelAPIService, private router: Router,private formSharingService: FormSharingService) {
    this.formSearchHotel = this.fb.group({
      dateIn: ['', Validators.required],
      dateOut: ['', Validators.required],
      numPersons: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.hotelAPI.getHotels().subscribe(data => this.hotels= data)
  }

  setCitys(){
    const cityHotel = this.hotels.filter(item => item.location ===this.formSearchHotel.get('city')?.value);
    if (cityHotel.length > 0){
    this.filteredHotels=cityHotel;
      return cityHotel[0].location;
    }
    return "Usuario no encontrado";
  }

  guardarRespuestas() {
    if (this.formSearchHotel.valid) {
      const fechaInicio = this.formSearchHotel.get('dateIn')?.value;
      const fechaFin = this.formSearchHotel.get('dateOut')?.value;
      const numPersons = this.formSearchHotel.get('numPersons')?.value;
      const city = this.formSearchHotel.get('city')?.value;

      const cityHotel = this.hotels.filter(item => item.location ===city);
      this.formSharingService.selectedDates = {fechaInicio, fechaFin, numPersons, city}

      if (cityHotel.length > 0){
        this.setCitys();
        this.showlist = true;

      }else
        alert('Lo lamento, de momento no contamos con hoteles en esa ciudad')
    } else {
      console.log('Formulario inválido');
    }
  }

  showMore(id:number){
    this.router.navigate(['/user/list-search/'+id])
  }


}
