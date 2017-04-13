import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../social-media.model';
import { Project } from '../project.model';
import { Contact } from '../contact.model';
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
  public socialMedia : SocialMedia[] = [];
  public newDescription: string = "";
  public contacts: Contact[]=[];
  public options: Object = {
    height:400
  }
  public currentUser;
  public socialMediaString;
  public newAccount;

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
    this.router.navigate(['projects', key]);
  }

  setSocialMedia(mediaArray){
    this.socialMedia = mediaArray;
  }


  addNewSocialMedia(){
    let newSocialMedia = new SocialMedia(this.socialMediaString, this.newAccount);
    this.socialMedia.push(newSocialMedia);
    this.socialMediaString = '';
    this.newAccount = '';
  }

  setContact(contactArray){
    this.contacts = contactArray;
  }

}
