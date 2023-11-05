import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelAPIService } from '../../services/hotel-api.service';
import { Hotels } from '../../interfaces/hotels';
import { Reserves } from '../../interfaces/reserves';
import { ReserveApiService } from '../../services/reserve-api.service';
import { FormSharingService } from '../../services/form-sharing.service';

@Component({
  selector: 'app-user-list-search',
  templateUrl: './user-list-search.component.html',
  styleUrls: ['../../styles.css','./user-list-search.component.css']
})
export class UserListSearchComponent implements OnInit{
  formCreateHotel: FormGroup;
  idHotel!: number;
  hotels: Hotels[] = [];

  constructor(private fb: FormBuilder, private hotelAPI: HotelAPIService, private reserveAPI: ReserveApiService,private activatedRoute: ActivatedRoute, private formSharingService: FormSharingService, private router: Router){
    this.formCreateHotel = this.fb.group({
      id: ['', Validators.required],
      nameHotel: ['', Validators.required],
      idRoom: ['', Validators.required],
      ubication: ['', Validators.required],
      movil: ['', Validators.required],
      dateIn: ['', Validators.required],
      dateOut: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    const dataForm = this.formSharingService.selectedDates

    console.log(dataForm)

    this.formCreateHotel.get('ubication')?.setValue(dataForm.city)
    this.formCreateHotel.get('dateIn')?.setValue(dataForm.fechaInicio)
    this.formCreateHotel.get('dateOut')?.setValue(dataForm.fechaFin)

    this.activatedRoute.params.subscribe( params =>{
      this.idHotel = params['id']
    })

    this.getHotel()
  }

  getHotel(){

    this.hotelAPI.getHotel(this.idHotel).subscribe(data => {
      this.formCreateHotel.get('nameHotel')?.setValue(data.name)
      this.idHotel=data.id
    });

  }


  guardarRespuestas() {
    if (this.formCreateHotel.valid) {
      const reserves : Reserves = {
        "id": this.formCreateHotel.get('id')?.value,
        "idUser": 123,
        "hotel": this.idHotel,
        "typeRoom": this.formCreateHotel.get('idRoom')?.value,
        "dateIn": this.formCreateHotel.get('dateIn')?.value,
        "dateOut": this.formCreateHotel.get('dateOut')?.value
      };

      this.reserveAPI.newReserve(reserves).subscribe(data => console.log(data));

      this.formCreateHotel.reset()
      this.router.navigate(['/user/search-hotel'])
    } else {
      console.log('Formulario inválido');
    }
  }
}
