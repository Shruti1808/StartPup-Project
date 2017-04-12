import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contacts;
  @Output() addClicked = new EventEmitter();
  newContactArray: Contact[]=[];
  currentContact: Contact;
  contactString: string = "";
  newDetail: string="";
  showContactEditForm: boolean = false;
  editContactForm: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChange(contactOption) {
    this.contactString = contactOption;
  }

  addContact() {
    var newContact = new Contact(this.contactString, this.newDetail);
    if (this.router.url == 'new-project'){
      this.newContactArray.push(newContact);
      this.addClicked.emit(this.newContactArray);
    }else {
      this.contacts.push(newContact);
      this.addClicked.emit(this.contacts);
    }
    this.contactString = '';
    this.newDetail = '';
  }

  confirmEditContact() {
    for (let contact of this.contacts) {
      if (contact.contactType == this.currentContact.contactType) {
        contact.contactDetail = this.currentContact.contactDetail;
      }
    }
    this.addClicked.emit(this.contacts);
  }

  deleteContact(contactToDelete) {
    if(confirm("Are you sure you would like to delete this contact?")) {
      for (let index in this.contacts) {
        if (this.contacts[parseInt(index)].contactType == contactToDelete.contactType) {
          this.contacts.splice(parseInt(index), 1);
        }
      }
      this.addClicked.emit(this.contacts);
    }
  }

  editContact(contactToEdit) {
    this.editContactForm = true;
    this.currentContact = contactToEdit;
  }

}
