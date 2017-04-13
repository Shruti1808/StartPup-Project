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
  @Input() selectedProjectKey: string;
  @Input() need;
  public editArea = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    console.log(this.selectedProjectKey);
  //   this.projectService.getProjectById(this.selectedProjectKey).subscribe(thisProject => {
  //       this.currentProject = thisProject;
  //       this.currentNeeds = this.currentProject.needs;
  //       console.log(this.currentNeeds);
  //   });
  }

  finishEditing() {
    console.log(this.need);
    this.editArea = true;
  }

  setSelection(){
    this.editArea = true;
  }

}
