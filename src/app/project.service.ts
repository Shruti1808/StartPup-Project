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

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/'+ projectId);
  }

  needCheck(){
    console.log(this.getProjectById[0].needs);
  }


  addNewProject(newProject: Project){
    this.projects.push(newProject);
  }

  getNeedByProjectId(projectId: string, needId){
    return this.angularFire.database.object('projects/'+ projectId + 'needs/' + needId);
  }

  addNewNeed(currentProject, newNeeds: Need[]){
    var projectEntryInFirebase = this.getProjectById(currentProject.$key);
    projectEntryInFirebase.update({
      needs: newNeeds
    })
}

  editProject(localUpdatedProject, socialMediaArray, localUpdatedProjectKey) {
    //$key is undefined
    console.log(localUpdatedProjectKey)
    var projectEntryInFirebase = this.getProjectById(localUpdatedProjectKey);
    console.log(projectEntryInFirebase)
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

updateNeed(localUpdatedNeed) {
  console.log(localUpdatedNeed);
  var needEntryInFirebase = this.getProjectById(localUpdatedNeed.$key);
  console.log(needEntryInFirebase);
  needEntryInFirebase.update({
    title: localUpdatedNeed.title,
    type: localUpdatedNeed.type,
    description: localUpdatedNeed.description
  });
}


}
