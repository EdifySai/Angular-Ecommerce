import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: String = "";
  password: String = "";
  email: String = "";
  userId: String = "";

  constructor(private userService: UserService) {

  }
  register() {
    var user = {
      username: this.username,
      password: this.password,
      email: this.email,
      userId: this.userId
    }
    console.log(user);
    this.userService.registerUser(user).subscribe((response: any) => {
      console.log("response", response);
    },
      (error: any) => {
        console.log("error", error);
      });
  }
}
