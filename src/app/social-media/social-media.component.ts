import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { SocialMedia } from '../social-media.model';
import { Router } from '@angular/router';

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
  newSocialMediaArray: SocialMedia[];
  socialMediaString: string = "";
  newAccount: string="";
  showProjectEditForm: boolean = false;
  editSocialMediaForm: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChange(socialMediaOption) {
    this.socialMediaString = socialMediaOption;
  }

  addSocialMedia(){
    var newSocialMedia = new SocialMedia(this.socialMediaString, this.newAccount);
    if (this.router.url == 'new-project'){
      this.newSocialMediaArray.push(newSocialMedia);
      this.addClicked.emit(this.newSocialMediaArray);
    }else {
      this.socialMedia.push(newSocialMedia);
      this.addClicked.emit(this.socialMedia);
    }
    this.socialMediaString = '';
    this.newAccount = '';
  }

  addNewSocialMedia(){
    var newSocialMedia = new SocialMedia(this.socialMediaString, this.newAccount);

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
