import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rooms } from '../../interfaces/rooms';
import { RoomApiServiceService } from '../../services/room-api-service.service';

@Component({
  selector: 'app-admin-room-create',
  templateUrl: './admin-room-create.component.html',
  styleUrls: ['../../styles.css']
  // styleUrls: ['./admin-user-create.component.css']
})
export class AdminRoomCreateComponent {
  formEditRoom: FormGroup;
  showList = false;
  rooms: Rooms[] = [];

  constructor(private fb: FormBuilder, private roomAPI: RoomApiServiceService) {
    this.formEditRoom = this.fb.group({
      idRoom: ['', Validators.required],
      capacity: [''],
      price: [''],
      tax: [''],
      state: [''],
    });

  }

  searchRoom() {
    const idControl : number= +this.formEditRoom.get('idRoom')?.value;
    if (this.formEditRoom.valid) {
      this.roomAPI.getRoom(idControl).subscribe(data => this.showData(data));

    } else {
      console.log('Formulario inválido');
    }
  }

  showData({id, capacity, price, tax, state }:Rooms){
    const rooms:Rooms={id, capacity, price, tax, state};
    this.formEditRoom.get('capacity')?.setValue(rooms.capacity)
    this.formEditRoom.get('price')?.setValue(rooms.price)
    this.formEditRoom.get('tax')?.setValue(rooms.tax)
    this.formEditRoom.get('state')?.setValue(rooms.state)

    this.showList = true;
  }

  updateRoom() {
    if (this.formEditRoom.valid) {
      const rooms : Rooms = {
        "id": this.formEditRoom.get('idRoom')?.value,
        "capacity": this.formEditRoom.get('capacity')?.value,
        "price": this.formEditRoom.get('price')?.value,
        "tax": this.formEditRoom.get('tax')?.value,
        "state": this.formEditRoom.get('state')?.value
      };

      this.roomAPI.putRoom(rooms).subscribe(data => console.log(data));

      this.formEditRoom.reset()
    } else {
      console.log('Formulario inválido');
    }
  }

}
