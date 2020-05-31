import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../window-ref.service';
import {OrderIdService} from '../order-id.service';
var Razorpay;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [WindowRefService]
})

export class CartComponent implements OnInit {

  rzp1: any
  successMessage: string;
  constructor(private winRef: WindowRefService, private myservice: OrderIdService) { }

  ngOnInit(): void {
  }

  createRzpayOrder(data) {
    //console.log(data);
    
    // call api to create order_id
    const order_id = this.myservice.getOrderid(data)
    .subscribe(data => {
      if (data) {
        this.successMessage = "Checkout Successfull"
      }
      else {
        this.successMessage = "Some Error"
      }
    })
    //const order_id = "order_Ewxj0yeGQPcZWn";
    this.payWithRazor(order_id);
  }

  payWithRazor(val) {
    const options: any = {
      key: '', //Insert API key_id here
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: 'Test Transaction',  // product description
      image: '', // company logo or product image
      order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

}