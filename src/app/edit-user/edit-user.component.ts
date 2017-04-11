import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  @Input() selectedUser;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingUser(userToUpdate){
    this.userService.updateUser(userToUpdate);
  }

  beginDeletingUser(userToDelete){
    if(confirm("Are you sure you want to delete this user?")){
      this.userService.deleteUser(userToDelete);
      this.router.navigate([""]);

    }
  }

}
