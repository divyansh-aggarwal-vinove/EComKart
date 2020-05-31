import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdetailsService } from '../productdetails.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productForm: FormGroup;

  isRegister;
  successMessage: string;

  get prodName() {
    return this.productForm.get('prodName');
  }

  get prodPrice() {
    return this.productForm.get('prodPrice');
  }

  get prodDesc() {
    return this.productForm.get('prodDesc');
  }

  get prodImageURL() {
    return this.productForm.get('prodImageURL');
  }

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private myservice: ProductdetailsService) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      prodName: ['', Validators.required],
      prodPrice: ['', Validators.required],
      prodDesc: ['', Validators.required],
      prodImageURL: ['', Validators.required]
    });
    this.isRegister = true;


  }


  onSubmit() {

    this.myservice.submitProducts(this.productForm.value)
      .subscribe(data => {
        if (data) {
          this.successMessage = "New Product Added Successfully";
          alert(this.successMessage);
          this.productForm.reset();
          this.router.navigate(['/admin/productlist']);
        }
        else {
          this.successMessage = "Some Error";
          alert(this.successMessage);
        }
      })

  }


  onUpdate() {
    this.myservice.updateProducts(this.productForm.value)
      .subscribe(data => {
        if (data) {
          this.successMessage = "Product updated Successfully";
          alert(this.successMessage);
          this.productForm.reset();
          this.router.navigate(['/admin/productlist']);
        }
        else {
          this.successMessage = "Some Error";
          alert(this.successMessage);
        }
      })


  }
}
