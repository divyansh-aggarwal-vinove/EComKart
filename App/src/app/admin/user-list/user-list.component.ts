import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userDetails;

  constructor(private router: Router, private _myservice: UserregisterService) { }

  ngOnInit(): void {

    this._myservice.getUserlist()
      .subscribe(data => {
        this.userDetails = data['users'];
        //console.log(this.userDetails);
    });
      
  }

  cAll() { }
  onEdit(num) { }
  onDel(num) { }





}
