import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  rzp1:any
  constructor() {  }

  ngOnInit(): void {
  }
  // app.controller('PaymentsCtrl', [
  //   '$scope',
  //   function ($scope) {
  //     $scope.options = {
  //       'key': '<Your-Key-Here>',
  //       // Insert the amount here, dynamically, even
  //       'amount': '50000',
  //       'name': '',
  //       'description': 'Pay for Order #2323',
  //       'image': '',
  //       'handler': function (transaction) {
  //         $scope.transactionHandler(transaction);
  //       },
  //       'prefill': {
  //         'name': '',
  //         'email': '',
  //         'contact': ''
  //       }
  //     };
  //     $scope.btnClick = function () {
  //       var rzp1 = new Razorpay($scope.options);
  //       rzp1.open();
  //     };
  // }]);


  
  // options = [{
  //   "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
  //   "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //   "currency": "INR",
  //   "name": "Acme Corp",
  //   "description": "Test Transaction",
  //   "image": "https://example.com/your_logo",
  //   "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //   "handler": function (response) {
  //     alert(response.razorpay_payment_id);
  //     alert(response.razorpay_order_id);
  //     alert(response.razorpay_signature)
  //   },
  //   "prefill": {
  //     "name": "Gaurav Kumar",
  //     "email": "gaurav.kumar@example.com",
  //     "contact": "9999999999"
  //   },
  //   "notes": {
  //     "address": "Razorpay Corporate Office"
  //   },
  //   "theme": {
  //     "color": "#F37254"
  //   }
  // }];

  //   rzp1 = new Razorpay(options);

  // document.getElementById('rzp-button1').onclick = function (e) {
  //   rzp1.open();
  //   e.preventDefault();
  
}
