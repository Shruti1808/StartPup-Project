import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() projectToEdit;
  test: string="Idk";

  showProjectEditForm: boolean = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitEdit(projectToEdit) {
    this.projectService.editProject(projectToEdit);
  }

  reload(){
    window.location.reload();
  }

}
