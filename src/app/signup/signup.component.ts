import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ UserService ]
})
export class SignupComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createNewUser(newName, newLocation, newUserEmail, newUserImage){
    var newUser = new User(newName, newLocation, newUserEmail, newUserImage, []);
    this.userService.addNewUser(newUser);
    this.clickSender.emit();
  }

  cancelAddNewUser(){
    this.clickSender.emit();
  }

}
