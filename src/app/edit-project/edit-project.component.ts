import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { SocialMedia } from '../social-media.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() projectToEdit;
  currentEditMedia: SocialMedia;
  projectSocialMedia: SocialMedia[] = [];

  showProjectEditForm: boolean = false;
  editSocialMediaForm: boolean = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitEdit(projectToEdit) {
    this.projectService.editProject(projectToEdit, this.projectSocialMedia);
  }

  reload(){
    window.location.reload();
  }

  editSocialMedia(mediaToEdit){
    this.editSocialMediaForm = true;
    this.currentEditMedia = mediaToEdit;
  }

  confirmEditSocialMedia(){
    for (let socialAccount of this.projectSocialMedia){
      if (socialAccount.mediaType == this.currentEditMedia.mediaType){
        socialAccount.mediaAccount = this.currentEditMedia.mediaAccount;
      }
    }
    this.editSocialMediaForm = !this.editSocialMediaForm;
  }

  getSocialMedia(){
    for (let socialAccount of this.projectToEdit.socialMedia){
      var newSocialMediaLocal = new SocialMedia(socialAccount.mediaType, socialAccount.mediaAccount)
      this.projectSocialMedia.push(newSocialMediaLocal);
    }
  }

  deleteSocialMedia(mediaToDelete) {
    var index = this.projectSocialMedia.indexOf(mediaToDelete);
    this.projectSocialMedia.splice(index, 1);
  }

}
