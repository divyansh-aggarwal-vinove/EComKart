import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  registrationForm: FormGroup;

  empList = [];

  isRegister;

  get usrName() {
    return this.registrationForm.get('usrName');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get cNo() {
    return this.registrationForm.get('cNo');
  }

  get addrr() {
    return this.registrationForm.get('addrr');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  

  this.registrationForm = this.fb.group({
    usrName: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required, Validators.max(99)]],
    cNo: ['', [Validators.required]],
    addrr: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(3)]
  });
  this.isRegister = true;


  const id: string = this.route.snapshot.paramMap.get('id');
  let sdat = JSON.parse(localStorage.getItem("emp_data"));
  this.registrationForm.patchValue({
    ...sdat[id]
  })

  this.isRegister = false;
  

}


onSubmit() {

  if (localStorage.getItem('emp_data') == null) {
    this.empList.push(this.registrationForm.value);
    localStorage.setItem('emp_data', JSON.stringify(this.empList));
  }

  else {
    const fr = localStorage.getItem("emp_data");
    const sds = JSON.parse(fr);
    for (var i = 0; i < sds.length; i++) {
      this.empList[i] = sds[i];
    }

    this.empList.push(this.registrationForm.value);
    localStorage.setItem('emp_data', JSON.stringify(this.empList));

  }

  this.registrationForm.reset();
  alert("New Employee has been registered successfully!!");
  this.router.navigate(['']);
  
}


yy = localStorage.getItem('iden');
sdat = JSON.parse(localStorage.getItem("emp_data"));

onUpdate() {

  this.empList.push(this.registrationForm.value);

  for(var i = 0; i < this.empList.length; i++){
    this.sdat[this.yy[i]] = this.empList[i];
  }
  localStorage.setItem('emp_data',JSON.stringify(this.sdat));

  alert("Changes have been saved successfully!!");
  this.router.navigate(['']);
  
}
}
