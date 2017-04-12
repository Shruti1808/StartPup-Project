import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AF } from '../providers/af';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  @Input() selectedUser;
  @Output() clickSender = new EventEmitter();

  constructor(
    private userService: UserService,
    private router: Router,
    private afService: AF
  ) { }

  ngOnInit() {
  }

  beginUpdatingUser(userToUpdate){
    this.userService.updateUser(userToUpdate);
    this.afService.updateProfile(userToUpdate.name, userToUpdate.image);
    this.clickSender.emit();
  }

  beginDeletingUser(userToDelete){
    if(confirm("Are you sure you want to delete this user?")){
      this.userService.deleteUser(userToDelete);
      this.router.navigate([""]);

    }
  }

}
