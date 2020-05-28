import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  admLogin: FormGroup;
  usrLogin: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.admLogin = new FormGroup({
      aemail: new FormControl(null, Validators.email),
      apassword: new FormControl(null, Validators.required)
    });
    this.usrLogin = new FormGroup({
      uemail: new FormControl(null, Validators.email),    //ulemmial => userLoginemail
      upassword: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    
  }

  aLogin(){}
  uLogin(){}
}
