import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Need } from '../need.model';
import { Contact } from '../contact.model';
import { SocialMedia } from '../social-media.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [UserService, ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  public projectId: number;
  public projectToDisplay: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = dataLastEmittedFromObserver;

      console.log(this.projectToDisplay);
    })
  }

}
