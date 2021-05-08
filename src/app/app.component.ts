import { Component } from '@angular/core';
import {user} from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  nameOfCourse : string = 'Angular';
  version : number = 11;
  instructor : string = 'Rajesh';

  courseDetails = {
    duration : "2 Months",
    modeOfTraining : "online"
  }
  imagePath : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatrr4qdhDM1E3VXWnY6GJtdUlDCtFzhbr2g&usqp=CAU";

  status : boolean = false;
  data : string;
  define method
  sendData( d)
  {
    this.data = d;
    console.log("data received from component view is",d);
  }
}*/

export class AppComponent{

  /*status : boolean = true
   changeStatus(){
     this.status = !this.status;
   }

   arr = [1,2,3,4,5]

   a : string[] = [];*/
 /*  addName(name){
     this.a.push(name);
   }*/

   /*deleteName(index){
     this.a.splice(index,1);
   }

   item: string;
//two way binding technique
   addName(){
     this.a.push(this.item);
     this.item = '';
   }

   users = [];

   /*addUserData(ref){

    let userObj = ref.value;
     this.users.push(userObj);

     //create form fields
     ref.reset();
   }*/

   //Using Two Way data binding

   /*userObj:user = {username : "",password : "",dob : "",email : ""};

   addUserData(){

     console.log(this.userObj);
     this.users.push(this.userObj);

     this.userObj = {username : "",password : "",dob : "",email : ""};
   }*/




}
