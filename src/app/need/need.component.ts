import { Component, OnInit, Input } from '@angular/core';
import { Need } from '../need.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.scss'],
  providers: [ProjectService]
})
export class NeedComponent implements OnInit {
  @Input() selectedProjectKey;
  @Input() selectedNeed
  //  = new Need(null, null, null);
  currentProject: Project;
  currentNeeds: Need[];
  projects: FirebaseObjectObservable<any[]>;
  public editArea = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjectById(this.selectedProjectKey).subscribe(thisProject => {
        this.currentProject = thisProject;
        this.currentNeeds = this.currentProject.needs;
        console.log(this.currentNeeds);
    });
  }


  submitForm(newTitle, newType, newDescription) {
    var newNeed = new Need(newTitle, newType, newDescription);
    this.currentNeeds.push(newNeed);
    console.log(this.currentNeeds);
    this.projectService.addNewNeed(this.currentProject, this.currentNeeds);
  }

  setSelection(need){
    this.editArea = true;
    this.selectedNeed = need;
    console.log("need name " + this.selectedNeed);
    console.log(this.projects);
  }

}
