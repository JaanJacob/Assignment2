import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router"; 
import { Router } from "@angular/router"
import { LoginService } from '../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;
  groups: any;
  userGroups: any;

  formGroupName: '';
  formRoomName: '';
  newGroupArray= [{groupName:'', members:[{'name':''}], rooms:[{'name':''}]}];

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService, 
    private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.user= (JSON.parse (localStorage.getItem("loggedInUser")));
    let index = 0

    // Route to get all the groups for super and admin. 
    this.httpClient.post(BACKEND_URL + '/api/allGroups', httpOptions)
    .subscribe((data:any) => {
    this.groups = data; 
    });
    
  }

}
