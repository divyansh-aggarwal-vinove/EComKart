import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }

  adminLogin(admin): Observable<any> {
    return this.http.post('http:localhost:3000/api/home/admin/login', admin);
  }

  userLogin(user): Observable<any> {
    return this.http.post('http:localhost:3000/api/home/user/login', user);
  }
}
