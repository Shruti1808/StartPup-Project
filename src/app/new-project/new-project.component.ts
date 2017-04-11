import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  providers:[ ProjectService ]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  createNewProject(newTitle, newImage, newDescription, newWebsite){
    var newProject = new Project([], newTitle, newImage, newDescription, [], [], newWebsite);
    this.projectService.addNewProject(newProject);
  }

}
