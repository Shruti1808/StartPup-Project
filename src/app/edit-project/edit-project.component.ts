import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { SocialMedia } from '../social-media.model';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() projectToEdit;
  @Input() projectId;
  @Output() closeModalSender = new EventEmitter();

  projectSocialMedia: SocialMedia[] = [];
  contacts: Contact[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSocialMedia();
    this.getContacts();
  }

  submitEdit(projectToEdit) {
    this.projectService.editProject(this.projectToEdit, this.projectSocialMedia, this.contacts, this.projectId);
    this.closeModalSender.emit()
  }

  reload(){
    window.location.reload();
    // this.router.navigate(['projects', this.projectId]);
  }

  getSocialMedia(){
    this.projectSocialMedia = [];
    if (this.projectToEdit.socialMedia){
      for (let socialAccount of this.projectToEdit.socialMedia){
        var newSocialMediaLocal = new SocialMedia(socialAccount.mediaType, socialAccount.mediaAccount);
        this.projectSocialMedia.push(newSocialMediaLocal);
      }
    }
  }

  setSocialMedia(mediaArray){
    this.projectSocialMedia = mediaArray;
  }

  getContacts(){
    this.contacts = [];
    if (this.projectToEdit.contactInformation){
      for (let contact of this.projectToEdit.contactInformation){
        var newContactLocal = new Contact(contact.contactType, contact.contactDetail)
        this.contacts.push(newContactLocal);
      }
    }
  }

  setContacts(contactsArray){
    this.contacts = contactsArray;
    console.log(this.contacts);
  }
}
