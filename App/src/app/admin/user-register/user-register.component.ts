import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userForm: FormGroup;

  isRegister;
  successMessage: string;

  get name() {
    return this.userForm.get('name');
  }

  get age() {
    return this.userForm.get('age');
  }

  get contactno() {
    return this.userForm.get('contactno');
  }

  get address() {
    return this.userForm.get('address');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _myservice: UserregisterService) { }

  ngOnInit(): void {


    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.max(99)]],
      contactno: ['', [Validators.required]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.isRegister = true;

  }


  onSubmit() {

    this._myservice.submitRegister(this.userForm.value)
      .subscribe(data => {
        if (data) {
          this.successMessage = "New User Added Successfully";
          alert(this.successMessage);
          this.userForm.reset();
          this.router.navigate(['/admin/userlist']);
        }
        else {
          this.successMessage = "Some Error";
          alert(this.successMessage);
        }
      })
  }

  onUpdate() {

    this._myservice.updateRegister(this.userForm.value)
      .subscribe(data => {
        if (data) {
          this.successMessage = "User Updated Successfully";
          alert(this.successMessage);
          this.userForm.reset();
          this.router.navigate(['/admin/userlist']);
        }
        else {
          this.successMessage = "Some Error";
          alert(this.successMessage);
        }
      })
  }

}
