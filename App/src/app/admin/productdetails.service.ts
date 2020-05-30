import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http: HttpClient) { }

  submitProducts(body: any) {
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/admin/products/create', body, { observe: 'body' });
  }

  updateProducts(body: any) {
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/admin/products/update', body, { observe: 'body' });
  }

  getProducts() { 
    return this.http.get('http://localhost:3000/api/admin/products');
  }

  delProducts(body: any){
    return this.http.delete('http://localhost:3000/api/admin/products/delete', { observe: 'body' });
  }
}
