import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }

  adminLogin(body: any) {
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('http:localhost:3000/api/home/admin/login', body, { observe: 'body' });
  }

  userLogin(body: any) {
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('http:localhost:3000/api/home/user/login', body, { observe: 'body' });
  }
}
