import { Component, OnInit, Input } from '@angular/core';
// import { Need } from '../need.model';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit-need',
  templateUrl: './edit-need.component.html',
  styleUrls: ['./edit-need.component.scss'],
  providers: [ProjectService]
})
export class EditNeedComponent implements OnInit {
  @Input() selectedNeed;
  public editForm = true;
  public projectId;


  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.forEach((urlParameters) => {
    // this.projectId = urlParameters['id'];
}

  // beginUpdatingNeed(needToUpdate){
  //   this.projectService.updateNeed(needToUpdate);
  // }

  finishedEditNeed(needToEdit) {
    this.projectService.updateNeed(this.projectId, needToEdit);
    this.editForm = false;
  }


}
