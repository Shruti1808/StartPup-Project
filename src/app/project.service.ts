import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Project } from './project.model';
import { NeedComponent } from './need/need.component';
import { Need } from './need.model';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  project: FirebaseObjectObservable<any>;
  projectNeeds: FirebaseListObservable<any[]>

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

  getNeedsByProjectId(projectId: string){
    return this.angularFire.database.list('projects/'+ projectId + '/needs/');
  }

  getNeedById(needId: string, projectId: string) {
      return this.angularFire.database.object('projects/'+ projectId + '/needs/' + needId);
  }

  // getNeedByProjectId(projectId: string, needId){
  //   return this.angularFire.database.object('projects/'+ projectId + '/needs/' + needId);
  // }

  addNewNeed(currentProject, newNeed){
    this.projectNeeds = this.getNeedsByProjectId(currentProject);
    let key = this.projectNeeds.push(newNeed).key;
    newNeed = this.getNeedById(key, currentProject);
    newNeed.update({
      key: key
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

  updateNeed(projectId, localUpdatedNeed) {
    // this.projectNeeds = this.getNeedsByProjectId(projectId);
    // for (let need of this.projectNeeds)
  }
}
