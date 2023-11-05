import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotels } from '../interfaces/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelAPIService {

  private apiUrl = 'http://localhost:3000/hotels';

  constructor(private http: HttpClient) {}

  nuevoHotel(hotel: Hotels){
    return this.http.post<Hotels>(this.apiUrl, hotel)
  }

  getHotels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getHotel(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  putHotel(cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cliente.id}`, cliente, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
