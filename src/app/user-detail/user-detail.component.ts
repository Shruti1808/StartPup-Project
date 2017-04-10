import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Need } from '../need.model';
import { SocialMedia } from '../social-media.model';
import { Contact } from '../contact.model';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserService, ProjectService]
})
export class UserDetailComponent implements OnInit {
  projects: FirebaseObjectObservable<any[]>;
  users: FirebaseObjectObservable<any[]>;
  userId: string;
  userToDisplay;


  constructor(
    public projectService: ProjectService,
    public userService: UserService,
    public route: ActivatedRoute,
    public location: Location) { }

  ngOnInit() {
    this.route.params.forEach((url) => {
      this.userId = url['id'];
    });
    this.userToDisplay = this.userService.getUserById(this.userId);
  }
}
