import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router"; 
import { Router } from "@angular/router"
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name= "";
  password= "";

  users: any;
  loggedIn= false;
  loggedUser: any;

  newUserName= "";
  newUserEmail= "";
  newUserArray= {'name':'', 'email':'', 'role':'user'};

  index = -1;

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) { 
    this.users=[
      {"name": "super", "email": "super@gmail.com", "id": 1, "role": "superAdmin" },
      {"name": "groupAD", "email": "groupAD@gmail.com", "id": 2, "role": "groupAdmin" },
      {"name": "groupAS", "email": "groupAD@gmail.com", "id": 3, "role": "groupAssis" },

      {"name": "aa", "email": "aa@gmail.com", "id": 4, "role": "user" },
      {"name": "bb", "email": "bb@gmail.com", "id": 5, "role": "user" },
      {"name": "cc", "email": "cc@gmail.com", "id": 6, "role": "user" },
      {"name": "dd", "email": "dd@gmail.com", "id": 7, "role": "user" },
      {"name": "ee", "email": "ee@gmail.com", "id": 8, "role": "user" }  
    ];
  }

  ngOnInit(): void {
  }

  login(){
    for (let i in this.users) {
      if (this.name == this.users[i].name && this.password == "123"){
        //this.router.navigate(['account'], { queryParams: { user: this.users[i] } });
        localStorage.setItem("loggedInUser", JSON.stringify(this.users[i]) );
        this.loggedUser = this.users[i];
        this.loginService.isLoggedIn = true;
        this.loggedIn = this.loginService.isLoggedIn;
        localStorage.setItem("isLoggedIn", JSON.stringify(this.loginService.isLoggedIn) );
      }
    }
  }

  goAccount(){
    this.router.navigate(['account'], { queryParams: { user: this.loggedUser} });
  }

  createUser(){
    this.newUserArray.name = this.newUserName;
    this.newUserArray.email = this.newUserEmail;
    this.users.push(this.newUserArray);
    console.log(this.newUserArray);
  }

  deleteUser(){
    for (let i in this.users){
      if (this.users[i].name == this.newUserName){
        this.users.splice(i, 1);
        console.log("deleted", this.users[i]);
      }
    }
  }
}
