import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { SocialMedia } from '../social-media.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  @Input() projectToEdit;
  @Input() socialMedia;
  @Output() addClicked = new EventEmitter();
  currentEditMedia: SocialMedia;
  socialMediaString: string = "";
  newAccount: string="";
  showProjectEditForm: boolean = false;
  editSocialMediaForm: boolean = false;


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

  confirmEditSocialMedia(){
    for (let socialAccount of this.socialMedia){
      if (socialAccount.mediaType == this.currentEditMedia.mediaType){
        socialAccount.mediaAccount = this.currentEditMedia.mediaAccount;
      }
    }
    this.editSocialMediaForm = !this.editSocialMediaForm;
    this.addClicked.emit(this.socialMedia);
  }

  deleteSocialMedia(mediaToDelete) {
    if(confirm("Are you sure you would like to delete this?")) {
      for (let index in this.socialMedia){
        if (this.socialMedia[parseInt(index)].mediaType == mediaToDelete.mediaType){
          this.socialMedia.splice(parseInt(index),1);
        }
      }
      this.addClicked.emit(this.socialMedia);
    }
  }

  editSocialMedia(mediaToEdit){
    this.editSocialMediaForm = true;
    this.currentEditMedia = mediaToEdit;
  }


}
