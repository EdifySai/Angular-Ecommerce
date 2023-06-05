import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {

  }
  username: any;
  password: any;
  login() {
    let obj = {
      username: this.username,
      password: this.password
    }
    console.log(obj);
    this.userService.loginUser(obj).subscribe(
      (response: any) => {
        console.log(response)
        if (response.statusCode == 200) {
          this.router.navigateByUrl("/dashboard");
        }
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}

