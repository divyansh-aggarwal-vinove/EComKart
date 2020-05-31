import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderIdService {

  constructor(private http: HttpClient ) { }

  getOrderid(data): Observable<any> {
    return this.http.post('http://localhost:3000/api/razor', data);
  }
}
