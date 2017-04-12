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

  constructor(public afService: AF, private router: Router) {
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          this.isLoggedIn = false;
        } else {
          this.afService.uid = auth.auth.uid;
          this.afService.displayName = auth.auth.displayName;
          this.afService.email = auth.auth.email;
          this.currentUser = auth.auth;
          this.isLoggedIn = true;
        };
        this.router.navigate(['']);
      }
    )
  }


  ngOnInit() {
  }

  showName() {
    if (this.currentUser) {
      if (this.currentUser.displayName && this.isLoggedIn) {
        return true;
      }
    }
  }

  logout() {
    this.afService.logout(this.currentUser);
    this.router.navigate(['']);
  }
}
