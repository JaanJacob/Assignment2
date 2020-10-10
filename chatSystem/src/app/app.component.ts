import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatSystem';

  constructor(public loginService: LoginService) {
  }

  logout(){
    this.loginService.isLoggedIn = false;
    localStorage.removeItem("loggedInUser");
    console.log("logged Out")
  }

}
