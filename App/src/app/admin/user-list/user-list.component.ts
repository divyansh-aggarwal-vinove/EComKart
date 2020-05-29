import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private router: Router, private _myservice: UserregisterService) { }

  ngOnInit(): void {
    let sdat;
  }

  sdat = this._myservice.getUserlist();
  
  cAll(){}
  onEdit(id){}
  onDel(id){}

}
