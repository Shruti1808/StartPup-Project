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
  @Input() projectId;

  projectSocialMedia: SocialMedia[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitEdit(projectToEdit) {
    this.projectService.editProject(this.projectToEdit, this.projectSocialMedia, this.projectId);
  }

  reload(){
    window.location.reload();
  }




  getSocialMedia(){
    this.projectSocialMedia = [];
    if (this.projectToEdit.projectSocialMedia){
      for (let socialAccount of this.projectToEdit.projectSocialMedia){
        var newSocialMediaLocal = new SocialMedia(socialAccount.mediaType, socialAccount.mediaAccount)
        this.projectSocialMedia.push(newSocialMediaLocal);
      }
    }
  }

  setSocialMedia(mediaArray){
    this.projectSocialMedia = mediaArray;
  }
}
