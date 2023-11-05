import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HotelAPIService} from '../../services/hotel-api.service'
import { Hotels } from '../../interfaces/hotels';

@Component({
  selector: 'app-admin-hotel-create',
  templateUrl: './admin-hotel-create.component.html',
  styleUrls: ['../../styles.css']

  // styleUrls: ['./admin-employee-create.component.css']
})
export class AdminHotelCreateComponent {

  formCreateHotel: FormGroup;
  constructor(private fb: FormBuilder, private hotelAPI: HotelAPIService) {
    this.formCreateHotel = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      rooms: ['', Validators.required],
      ubication: ['', Validators.required],
      movil: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  guardarRespuestas() {
    if (this.formCreateHotel.valid) {
      const hotel : Hotels = {
        "id": this.formCreateHotel.get('id')?.value,
        "name": this.formCreateHotel.get('name')?.value,
        "rooms": this.formCreateHotel.get('rooms')?.value,
        "movil": this.formCreateHotel.get('movil')?.value,
        "location": this.formCreateHotel.get('ubication')?.value,
        "state": this.formCreateHotel.get('state')?.value
      };

      this.hotelAPI.nuevoHotel(hotel).subscribe(data => console.log(data));

      this.formCreateHotel.reset()
    } else {
      console.log('Formulario inválido');
    }
  }

}
