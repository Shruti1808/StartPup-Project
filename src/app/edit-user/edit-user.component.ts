import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name:string, location:string, email:string, image: string, projectList:string[] ){
    var newUser: User = new User(name, location, email, image, projectList);
    console.log(newUser);
    alert("user updated");
  }



}
