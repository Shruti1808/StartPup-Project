import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ ProjectService ]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
