import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdetailsService } from '../productdetails.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any;

  constructor(private router: Router, private myservice: ProductdetailsService) { }

  ngOnInit(): void {
    this.myservice.getProducts()
    .subscribe(data => {
      this.productList = data['products'];
      //console.log(this.productList);
  });

  }


  cAll(){}
  onEdit(id){}
  onDel(id){}
}
