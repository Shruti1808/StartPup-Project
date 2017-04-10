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
  projectsToDisplay: Project[];
  input;
  userProject;


  constructor(
    public projectService: ProjectService,
    public userService: UserService,
    public route: ActivatedRoute,
    public location: Location) { }

  ngOnInit() {
    this.route.params.forEach((url) => {
      this.userId = url['id'];
    });
    this.userToDisplay = this.userService.getUserById(this.userId).subscribe(dataLastEmittedFromObserver => {
      this.userToDisplay = dataLastEmittedFromObserver;
      console.log(this.userToDisplay)
      for (let i = 0; i < this.userToDisplay.projects.length; i++) {
        var userProject = new Project(this.userToDisplay.projects[i].title, this.userToDisplay.projects[i].needs, this.userToDisplay.projects[i].image, this.userToDisplay.projects[i].description, this.userToDisplay.projects[i].socialMedia, this.userToDisplay.projects[i].contactInformation, this.userToDisplay.projects[i].website);
        this.projectsToDisplay.push(userProject);
      }
      console.log(this.projectsToDisplay);
    })
  }
}
