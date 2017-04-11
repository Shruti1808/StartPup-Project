import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from './project.model';
import { NeedComponent } from './need/need.component';
import { Need } from './need.model';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  needs: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  addNewProject(newProject: Project){
    this.projects.push(newProject);
  }

  getNeeds(){
    return this.needs;
  }

  addNewNeed(newNeed: Need){
    this.projects.push(newNeed);
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/'+ projectId);
  }
}
