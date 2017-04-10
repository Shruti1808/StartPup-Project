import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [UserService]
})
export class SideBarComponent implements OnInit {
  @Input() project: any;
  @Input() owner: User;

  constructor() { }

  ngOnInit() {
  }

}
