import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() owner;
  @Input() userIsOwner;
  @Output() editClickSender = new EventEmitter();
  twitterHandle: string;

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
    console.log("SOCIAL MEDIA");
    console.log(this.owner.socialMedia);
  }

  getTwitterHandle(socialMedia) {
    console.log(socialMedia);
    // for(let media of socialMedia) {
    //   if(media.mediaType == "Twitter") {
      return socialMedia;
    //   }
    // }
  }

  editClicked() {
    this.editClickSender.emit();
  }

}
