import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SocialMedia } from '../social-media.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMedia : SocialMedia[] = [];
  @Output() addClicked = new EventEmitter();
  socialMediaString: string = "";
  newAccount: string="";

  constructor() { }

  ngOnInit() {
  }

  onChange(socialMediaOption) {
    this.socialMediaString = socialMediaOption;
  }

  addNewSocialMedia(){
    var newSocialMedia = new SocialMedia(this.socialMediaString, this.newAccount);
    this.socialMedia.push(newSocialMedia);
    this.socialMediaString = '';
    this.newAccount = '';
    this.addClicked.emit(this.socialMedia);
  }


}
