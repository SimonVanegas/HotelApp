import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotels } from '../../interfaces/hotels';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-hotel-edit',
  templateUrl: './admin-hotel-edit.component.html',
  styleUrls: ['../../styles.css','./admin-hotel-edit.component.css']
  // styleUrls: ['./admin-empleado-edit.component.css']
})

export class AdminHotelEditComponent {
  formEditHotel: FormGroup;
  formData: any;
  showList = false;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.formEditHotel = this.fb.group({
      idHotel: ['', Validators.required],
    });

    this.formData = this.dataService.getFormData();
  }


  hotels:Hotels[] = [
    { id: 1001230023, name: 'Hotel Milagros', state: 1, cel: 5789004, rooms: 4, ubication: 'Medellín'},
  ];

  buscarRespuestas() {
    if (this.formEditHotel.valid) {
      console.log('Formulario válido');
      const idHotel = this.formEditHotel.value.idHotel;
      // const copyData = this.formData.filter(()=>{
      //   return this.formData.id(idHotel)==idHotel
      // })
      this.showList = true;

    } else {
      console.log('Formulario inválido');
    }
  }

  EditarHotel(id:number){

  }
}
