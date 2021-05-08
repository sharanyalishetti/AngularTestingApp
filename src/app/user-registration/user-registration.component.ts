import { Component, OnInit } from '@angular/core';
import {user} from '../models/user.model';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent{
  
  userObj: user = {username : "",password : "", dob : "",email : ""};
  users = []
  addUserData(){
    this.users.push(this.userObj);

    this.userObj = {username: "",password : "", dob : "",email : ""};
  }

}


