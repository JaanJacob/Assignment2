import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router"; 
import { Router } from "@angular/router"
import { LoginService } from '../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name= "";
  password= "";
  formData = {name: this.name, password: this.password};

  users: any;
  loggedIn= false;
  loggedUser: any;

  newUserName= "";
  newUserEmail= "";
  newUserArray= {name: this.newUserName, email: this.newUserEmail, role: 'user'};

  index = -1;

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService, 
              private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  login(){
    this.httpClient.post(BACKEND_URL + '/api/checkLogin', this.formData)
    .subscribe((data:any) => {
      if (data.valid == true){
        this.loggedIn = true;
        localStorage.setItem("loggedInUser", JSON.stringify(data.username) ); 
        localStorage.setItem("role", JSON.stringify(data.role) ); 
        this.loggedUser = {role: data.role};
      }
    });
  }

  goAccount(){
    this.router.navigate(['account'], { queryParams: { user: this.loggedUser} });
  }

  createUser(){
    this.httpClient.post(BACKEND_URL + '/api/addUser', this.newUserArray)
    .subscribe((data:any) => {
      if (data == true){
        console.log("new user created");
      }else {
        console.log("Error in creating user");
      }
    });
  }

  deleteUser(){
    this.httpClient.post(BACKEND_URL + '/api/deleteUser', this.newUserName)
    .subscribe((data:any) => {
      if (data == true){
        console.log(this.newUserName + " User deleted from database");
      }else {
        console.log("Error in deleting user");
      }
    });
  }
}
