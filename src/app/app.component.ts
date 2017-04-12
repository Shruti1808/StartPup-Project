import { Component, OnInit } from '@angular/core';
import { AF } from "./providers/af";
import { Router } from "@angular/router";
import { User } from "./user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'StartPup';
  showSignup: boolean = false;
  showLogin: boolean = false;
  public isLoggedIn: boolean;
  public currentUser;
  public userReady = false;

  constructor(public afService: AF, private router: Router) {
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.isLoggedIn = false;
        } else {
          this.afService.uid = auth.auth.uid;
          this.afService.displayName = auth.auth.displayName;
          this.afService.email = auth.auth.email;
          this.currentUser = auth.auth;
          console.log("I AM CURRENT USER");
          console.log(this.currentUser);
          console.log(auth.auth);
          console.log(this.afService.uid);
          console.log(this.afService.displayName);
          // UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
          // the user did not get redirected to the home page.
          this.isLoggedIn = true;
          if (this.isLoggedIn && this.currentUser.displayName) {
            this.userReady = true;
          }
        };
        console.log("logged in");
        console.log("DISPLAY NAME");
        console.log(this.currentUser.displayName);
        this.router.navigate(['']);
      }
    )
  }


  ngOnInit() {
  }

  // determineUserReady() {
  //   setTimeout(function() {
  //   }

  logout() {
    this.afService.logout();
  }
}
