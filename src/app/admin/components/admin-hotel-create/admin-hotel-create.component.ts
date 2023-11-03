import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-hotel-create',
  templateUrl: './admin-hotel-create.component.html',
  styleUrls: ['../../styles.css']

  // styleUrls: ['./admin-employee-create.component.css']
})
export class AdminHotelCreateComponent {

  formCreateHotel: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
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
      console.log('Formulario válido');
      console.log('Valores:', this.formCreateHotel.value);
      this.dataService.setFormData ( this.formCreateHotel.value );
    } else {
      console.log('Formulario inválido');
    }
  }

}
