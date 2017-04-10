import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ ProjectService ]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToProjectDetail(clickedProject) {
    this.router.navigate(["project", clickedProject.$key]);
  }

}
