import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  admLogin: FormGroup;
  usrLogin: FormGroup;
  successMessage: string;

  get aemail() {
    return this.admLogin.get('aemail');
  }

  get apassword() {
    return this.admLogin.get('apassword');
  }

  get uemail() {
    return this.usrLogin.get('uemail');
  }

  get upassword() {
    return this.usrLogin.get('upassword');
  }


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private mylogin: LoginService) { }

  ngOnInit(): void {

    this.admLogin = this.fb.group({
      aemail: ['', [Validators.required, Validators.email]],
      apassword: ['', Validators.required]
    });

    this.usrLogin = this.fb.group({
      uemail: ['', [Validators.required, Validators.email]],
      upassword: ['', Validators.required]
    });

  }

  aLogin() {
    console.log(this.admLogin.value)
    this.mylogin.adminLogin(this.admLogin.value)
      .subscribe(data => {
        if (data) {
          this.successMessage = "Admin Login Successfull"
        }
        else {
          this.successMessage = "Some Error"
        }
      })

    this.router.navigate(['/admin']);
  }

  uLogin() {
    console.log(this.usrLogin.value)
    this.mylogin.userLogin(this.admLogin.value)
      .subscribe(data => {
        if (data) {
          this.successMessage = "User Login Successfull"
        }
        else {
          this.successMessage = "Some Error"
        }
      })

    this.router.navigate(['/dashboard']);
  }


}
