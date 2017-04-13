import { Component, OnInit, Input } from '@angular/core';
import { Need } from '../need.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-need',
  templateUrl: './add-need.component.html',
  styleUrls: ['./add-need.component.scss'],
  providers: [ProjectService]
})
export class AddNeedComponent implements OnInit {
  @Input() selectedProjectKey: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(newTitle, newType, newDescription) {
    var newNeed = new Need(newTitle, newType, newDescription);
    this.projectService.addNewNeed(this.selectedProjectKey, newNeed);
  }
}
