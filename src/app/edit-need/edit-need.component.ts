import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() projectId;
  @Input() needId;
  public currentProject;
  public editForm = true;
  @Output() clickSender = new EventEmitter();


  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.projectId);
    // this.currentProject = this.projectService.getProjectById(this.projectId).subscribe((dataLastEmittedFromObserver) => {
    //   this.currentProject = dataLastEmittedFromObserver;
    //   console.log(this.currentProject.needs);
    // });
  }

  // beginUpdatingNeed(needToUpdate){
  //   this.projectService.updateNeed(needToUpdate);
  // }

  finishedEditNeed() {
    this.projectService.updateNeed(this.selectedNeed, this.projectId, this.needId);
    this.clickSender.emit();
  }


}
