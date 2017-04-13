import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../social-media.model';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  providers:[ ProjectService ]
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

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private afService: AF
  ) { }

  ngOnInit() {
  }

  createNewProject(newTitle, newImage, newDescription, newWebsite){
    this.currentUser = this.afService.authState.auth.uid;
    var newProject = new Project(this.currentUser, [], newTitle, newImage, newDescription, this.socialMedia, [], newWebsite);
    this.projectService.addNewProject(newProject);
    this.router.navigate([""]);
  }

  onChange(socialMediaOption) {
    this.socialMediaString = socialMediaOption;
  }

  addNewSocialMedia(){
    var newSocialMedia = new SocialMedia(this.socialMediaString, this.newAccount);
    this.socialMedia.push(newSocialMedia);
    this.socialMediaString = '';
    this.newAccount = '';
  }

}
