import { Component, OnInit, Input } from '@angular/core';
import { Need } from '../need.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { AF } from '../providers/af';
import { Project } from '../project.model';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.scss'],
  providers: [ProjectService]
})
export class NeedComponent implements OnInit {
  @Input() selectedProjectKey: string;
  @Input() needId;
  @Input() userIsOwner;
  public need;
  public project;
  public editArea = false;

  constructor(
    private projectService: ProjectService,
    private afService: AF
  ) { }

  ngOnInit() {
    this.projectService.getNeedById(this.selectedProjectKey, this.needId).subscribe((data) => {
      this.need = data;
    })
    // this.userIsOwner = this.projectService.authenticateProject(this.selectedProjectKey);
  }

  finishEditing() {
    this.editArea = false;
  }

  setSelection(){
    this.editArea = true;
  }

}
