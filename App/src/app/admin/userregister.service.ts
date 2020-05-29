import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private http: HttpClient) { }

  submitRegister(body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/create', body, { observe: 'body' });
  }

  updateRegister(body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/users/update', body, { observe: 'body' });
  }

  getUserlist() {
    return this.http.get('http://localhost:3000/users');
  }

  delUser(){
    return this.http.delete('http://localhost:3000/users/delete', { observe: 'body' });
  }
}
