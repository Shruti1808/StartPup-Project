import { Component, OnInit, Input } from '@angular/core';
// import { Need } from '../need.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-edit-need',
  templateUrl: './edit-need.component.html',
  styleUrls: ['./edit-need.component.scss'],
  providers: [ProjectService]
})
export class EditNeedComponent implements OnInit {
  @Input() selectedNeed;
  public editForm = true;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  // beginUpdatingNeed(needToUpdate){
  //   this.projectService.updateNeed(needToUpdate);
  // }

  finishedEditNeed(needToEdit) {
    this.projectService.updateNeed(needToEdit);
    this.editForm = false;

  }


}
