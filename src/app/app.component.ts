import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceapp';
  constructor() {
    console.log("constructor called");

    if (localStorage.getItem('isUserLoggedIn') != "true") {
      // document.getElementById("logout").style.display = "none";
      // .
    }
  }
}
