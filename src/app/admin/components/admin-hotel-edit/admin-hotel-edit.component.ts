import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotels } from '../../interfaces/hotels';
import { HotelAPIService } from '../../services/hotel-api.service';

@Component({
  selector: 'app-admin-hotel-edit',
  templateUrl: './admin-hotel-edit.component.html',
  styleUrls: ['../../styles.css','./admin-hotel-edit.component.css']
  // styleUrls: ['./admin-empleado-edit.component.css']
})

export class AdminHotelEditComponent {
  formEditHotel: FormGroup;
  showList = false;
  hotels: Hotels[] = [];
  constructor(private fb: FormBuilder, private hotelAPI: HotelAPIService) {
    this.formEditHotel = this.fb.group({
      idHotel: ['', Validators.required],
      name: [''],
      rooms: [''],
      movil: [''],
      location: [''],
      state: [''],
    });

  }

  buscarRespuestas() {
    const idControl : number= +this.formEditHotel.get('idHotel')?.value;
    if (this.formEditHotel.valid) {
      this.hotelAPI.getHotel(idControl).subscribe(data => this.showData(data));

    } else {
      console.log('Formulario inválido');
    }
  }

  showData({id, name, rooms, movil, location, state }:Hotels){
    const hotels:Hotels={id, name, rooms, movil, location, state};
    this.formEditHotel.get('name')?.setValue(hotels.name)
    this.formEditHotel.get('rooms')?.setValue(hotels.rooms)
    this.formEditHotel.get('movil')?.setValue(hotels.movil)
    this.formEditHotel.get('location')?.setValue(hotels.location)
    this.formEditHotel.get('state')?.setValue(hotels.state)

    this.showList = true;
  }

  updateHotel(){
    if (this.formEditHotel.valid) {
      console.log('asdasdas')
      const hotel : Hotels = {
        "id": this.formEditHotel.get('idHotel')?.value,
        "name": this.formEditHotel.get('name')?.value,
        "rooms": this.formEditHotel.get('rooms')?.value,
        "movil": this.formEditHotel.get('movil')?.value,
        "location": this.formEditHotel.get('location')?.value,
        "state": this.formEditHotel.get('state')?.value
      };

      this.hotelAPI.putHotel(hotel).subscribe(data => console.log(data));
      this.formEditHotel.reset()
    } else {
      console.log('Formulario inválido');
    }
  }
}
