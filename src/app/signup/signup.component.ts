import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import {AF} from "../providers/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ UserService ]
})
export class SignupComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  public error: any;

  constructor(private userService: UserService,
              private afService: AF,
              private router: Router
              ) { }

  ngOnInit() {
  }

  register(event, name, email, password) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {
      this.afService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.clickSender.emit();
        this.router.navigate(['newuser', user.uid]);
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }

  createNewUser(newName, newEmail, newPassword){
    let newUser = new User(newName, newEmail, newPassword);
    this.userService.addNewUser(newUser);
    this.clickSender.emit();
  }

  cancelAddNewUser(){
    this.clickSender.emit();
  }

}
