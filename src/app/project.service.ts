import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from './project.model';
import { NeedComponent } from './need/need.component';
import { Need } from './need.model';
import { AF } from './providers/af';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire, private afService: AF) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/'+ projectId);
  }

  addNewProject(newProject: Project){
    return this.projects.push(newProject).key;
  }

  editProject(localUpdatedProject, socialMediaArray, contactArray, localUpdatedProjectKey) {
    //$key is undefined
    console.log(localUpdatedProjectKey)
    let projectEntryInFirebase = this.getProjectById(localUpdatedProjectKey);
    console.log(projectEntryInFirebase)
    projectEntryInFirebase.update({
      // needs: localUpdatedProject.needs,
      title: localUpdatedProject.title,
      image: localUpdatedProject.image,
      description: localUpdatedProject.description,
      socialMedia: socialMediaArray,
      contactInformation: contactArray,
      website: localUpdatedProject.website
    })
  }

  deleteProject(localProjectToDelete) {
    let projectEntryInFirebase = this.getProjectById(localProjectToDelete.key);
    projectEntryInFirebase.remove();
  }

  // NEEDS methods

  addNewNeed(currentProject, newNeed){
    const needs = this.angularFire.database.list('/projects/'+ currentProject + '/needs/');
    needs.push(newNeed);
  }

  getNeedById(projectId, needId) {
    return this.angularFire.database.object('projects/'+ projectId + '/needs/' + needId);
  }

  deleteNeed(projectId, needId) {
    let needToDelete = this.getNeedById(projectId, needId);
    needToDelete.remove();
  }

  updateNeed(localNeed, projectId, needId) {
    let needToEdit = this.getNeedById(projectId, needId);
    needToEdit.update({
      description: localNeed.description,
      title: localNeed.title,
      type: localNeed.type
    })
  }

  //Project authentication method

  authenticateProject(projectKey) {
    let project;
    this.getProjectById(projectKey).subscribe((data) => {
      project = data;
    })
    if (this.afService.authState) {
      const currentUser = this.afService.authState.uid;
      const projectOwner = project.owner;

      if (currentUser === projectOwner) {
        return true;
      }
    }
  }


}
