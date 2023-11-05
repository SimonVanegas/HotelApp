import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserves } from '../interfaces/reserves';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReserveApiService {

  private apiUrl = 'http://localhost:3000/reserves';

  constructor(private http: HttpClient) {}

  newReserve(reserves: Reserves){
    return this.http.post<Reserves>(this.apiUrl, reserves)
  }

  getReserves(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getReserve(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  putReserve(cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cliente.id}`, cliente, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteReserve(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
