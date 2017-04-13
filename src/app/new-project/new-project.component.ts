import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../social-media.model';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  providers:[ ProjectService, UserService ]
})
export class NewProjectComponent implements OnInit {
  newDescription: string = "";
  socialMediaString: string = "";
  newAccount: string="";
  socialMedia : SocialMedia[] = [];
  public options: Object = {
    height:400
  }
  public currentUser;
  public userProjects;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private afService: AF,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  createNewProject(newTitle, newImage, newDescription, newWebsite){
    this.currentUser = this.afService.authState.auth.uid;
    let newProject = new Project(this.currentUser, [], newTitle, newImage, newDescription, this.socialMedia, [], newWebsite);
    let key = this.projectService.addNewProject(newProject);
    this.userService.addProjectToUser(this.currentUser, key);
    this.router.navigate([""]);
  }

  onChange(socialMediaOption) {
    this.socialMediaString = socialMediaOption;
  }

  addNewSocialMedia(){
    let newSocialMedia = new SocialMedia(this.socialMediaString, this.newAccount);
    this.socialMedia.push(newSocialMedia);
    this.socialMediaString = '';
    this.newAccount = '';
  }

}
