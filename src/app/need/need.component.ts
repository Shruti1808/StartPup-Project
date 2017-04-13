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
  @Input() needId;
  public need;
  public editArea = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getNeedById(this.selectedProjectKey, this.needId).subscribe((data) => {
      this.need = data;
    })
  }

  finishEditing() {
    this.editArea = false;
  }

  setSelection(){
    this.editArea = true;
  }

}
