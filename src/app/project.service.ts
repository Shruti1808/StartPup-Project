import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  addNewProject(newProject: Project){
    this.projects.push(newProject);
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
