import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;
  login() {
    console.log("login called");
    console.log(this.username);
    console.log(this.password);
    let obj = {
      username: this.username,
      password: this.password
    }
  }
}
