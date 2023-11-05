import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rooms } from '../interfaces/rooms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomApiServiceService {
  private apiUrl = 'http://localhost:3000/rooms';

  constructor(private http: HttpClient) {}

  newRoom(room: Rooms){
    return this.http.post<Rooms>(this.apiUrl, room)
  }

  getRoom(id: number): Observable<Rooms> {
    return this.http.get<Rooms>(`${this.apiUrl}/${id}`);
  }


  putRoom(room: Rooms): Observable<Rooms> {
    return this.http.put<Rooms>(`${this.apiUrl}/${room.id}`, room, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

