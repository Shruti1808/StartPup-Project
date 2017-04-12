import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from './project.model';
import { NeedComponent } from './need/need.component';
import { Need } from './need.model';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  addingNeed = [];

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/'+ projectId);
  }

  needCheck(){
    console.log(this.getProjectById[0].needs);
  }


  addNewProject(newProject: Project){
    this.projects.push(newProject);
  }

  // getNeeds(){
  //   return this.getProjectById.needs;
  // }

  addNewNeed(currentProject, newNeeds: Need[]){
    var projectEntryInFirebase = this.getProjectById(currentProject.$key);
    projectEntryInFirebase.update({
      needs: newNeeds
    })
  // this.projects.subscribe(projects => {
  //     this.addingNeed.push(newNeed);
  //   });
  //   console.log(this.addingNeed);
  //    this.addingNeed;
  // }
}
  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/'+ projectId);
  }

  editProject(localUpdatedProject, socialMediaArray, localUpdatedProjectKey) {

    console.log(localUpdatedProjectKey);
    //$key is undefined
    var projectEntryInFirebase = this.getProjectById(localUpdatedProjectKey);
    projectEntryInFirebase.update({
      // needs: localUpdatedProject.needs,
      title: localUpdatedProject.title,
      image: localUpdatedProject.image,
      description: localUpdatedProject.description,
      socialMedia: socialMediaArray,
      // contactInformation: localUpdatedProject.contactInformation,
      website: localUpdatedProject.website
    })
  }

  deleteProject(localProjectToDelete) {
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }
}
