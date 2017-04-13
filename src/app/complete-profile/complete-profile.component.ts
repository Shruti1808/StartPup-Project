import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
  providers: [UserService]
})
export class CompleteProfileComponent implements OnInit {
  public userId: string;
  public currentUser;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private router: Router,
    private afService: AF
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
      console.log(this.userId);
    });
    this.currentUser = this.userService.getUserById(this.userId).subscribe(dataLastEmittedFromObserver => {
      this.currentUser = dataLastEmittedFromObserver;
      console.log(this.currentUser.$key);
    });
  }

  saveProfile(name, location, about, image) {
    this.currentUser.location = location;
    this.currentUser.about = about;
    // if (!image) {
    //   image = "../assets/images/user.png";
    // }
    this.currentUser.image = image;
    this.afService.updateProfile(name, image);
    this.userService.updateUser(this.currentUser);
    this.router.navigate(['']);
  }
}
