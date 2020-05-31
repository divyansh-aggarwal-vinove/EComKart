import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http: HttpClient) { }

  submitProducts(body): Observable<any> {
    return this.http.post('http://localhost:3000/api/admin/products/create', body);
  }

  updateProducts(body): Observable<any> {
    return this.http.put('http://localhost:3000/api/admin/products/update', body);
  }

  getProducts() { 
    return this.http.get('http://localhost:3000/api/admin/products');
  }

  delProducts(body: any){
    return this.http.delete('http://localhost:3000/api/admin/products/delete');
  }
}
