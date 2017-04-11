import { Component, OnInit } from '@angular/core';
import { Need } from '../need.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.scss'],
  providers: [ProjectService]
})
export class NeedComponent implements OnInit {
 
  constructor(private productService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, type: string, description: string) {
    var newNeed: Need = new Need(title, type, description);
    console.log(newNeed);
  }

}
