import { Component } from '@angular/core';
import { Clients } from '../../interfaces/clients';

@Component({
  selector: 'app-list-reserve',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.css']
})
export class ReserveListComponent {
  clients:Clients[] = [
    { id: 1, carId: '123322321', name: 'Hotel Maravilla', type: '100', date: 'Medellín' },
    { id: 2, carId: '523453245', name: 'Hotel Hogar', type: '100', date: 'Medellín' },
    { id: 3, carId: '435232552', name: 'Hotel Solitario', type: '100', date: 'Medellín' },
    { id: 4, carId: '756454567', name: 'Hotel Bonito', type: '100', date: 'Medellín' },
    { id: 5, carId: '253534636', name: 'Hotel Feo', type: '100', date: 'Medellín' },
    { id: 6, carId: '124125534', name: 'Hotel La Gata', type: '100', date: 'Medellín' },
    { id: 7, carId: '123322321', name: 'Hotel Grande', type: '100', date: 'Medellín' },
    { id: 8, carId: '215345255', name: 'Hotel Playa 1', type: '100', date: 'Medellín' },
    { id: 9, carId: '352352556', name: 'Hotel Playa 2', type: '100', date: 'Medellín' },
    { id: 10, carId: '536464646', name: 'Hotel Playa 3', type: '100', date: 'Medellín' },
    { id: 11, carId: '456346463', name: 'Hotel Playa 4', type: '100', date: 'Medellín' },
    { id: 12, carId: '253534564', name: 'Hotel Playa 5', type: '100', date: 'Medellín' },
    { id: 13, carId: '324523555', name: 'Hotel Playa 6', type: '100', date: 'Medellín' },
  ];

  aceptarPersona(id: number) {
    // Lógica para aceptar persona con el ID proporcionado
    console.log(`Persona aceptada con ID: ${id}`);
  }
}
