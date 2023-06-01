import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(object: any) {
    return this.http.post("http://localhost:10091/login", object)
  }

  registerUser(object: any) {
    return this.http.post("http://localhost:9012/user/register", object);
  }

}
