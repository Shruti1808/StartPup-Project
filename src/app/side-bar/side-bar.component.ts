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

  getType(socialMedia){
    if (socialMedia.mediaType === 'Facebook') {
      return "fa fa-facebook-square  fa-2x";
    } else if (socialMedia.mediaType === 'Twitter') {
      return "fa fa-twitter-square fa-2x";
    } else if (socialMedia.mediaType === 'Instagram') {
      return "fa fa-instagram fa-2x";
    } else if (socialMedia.mediaType === 'LinkedIn') {
      return "fa fa-linkedin-square fa-2x";
    }
  }

  getTwitterHandle() {
    return 'palaeoplushies';
  }

}
