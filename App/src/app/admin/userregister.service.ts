import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private http: HttpClient) { }

  submitRegister(body): Observable<any> {
    return this.http.post('http://localhost:3000/api/admin/users/create', body);
  }

  updateRegister(body): Observable<any> {
    return this.http.put('http://localhost:3000/api/admin/users/update', body);
  }

  getUserlist() {
    return this.http.get('http://localhost:3000/api/admin/users');
  }

  delUser() {
    return this.http.delete('http://localhost:3000/api/admin/users/delete');
  }
}
