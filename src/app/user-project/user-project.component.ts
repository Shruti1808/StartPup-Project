import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.scss'],
  providers: [ProjectService]
})
export class UserProjectComponent implements OnInit {
  @Input() projectKey: string;
  public projectToDisplay;

  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.projectToDisplay = this.projectService.getProjectById(this.projectKey).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = dataLastEmittedFromObserver;
      console.log(this.projectToDisplay);
    });
  }

  goToProjectDetail() {
    this.router.navigate(["projects", this.projectKey]);
  }
}
