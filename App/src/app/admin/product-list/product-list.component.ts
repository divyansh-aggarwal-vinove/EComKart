import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdetailsService } from '../productdetails.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private router: Router, private myservice: ProductdetailsService) { }

  ngOnInit(): void {
    let sdat = "";
  }

  sdat = this.myservice.getProducts();

  cAll(){}
  onEdit(id){}
  onDel(id){}
}
