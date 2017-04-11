import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { User } from './user.model';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
  }

  getUsers(){
    return this.users;
  }

  addNewUser(newUser: User){
    this.users.push(newUser);
  }

  getUserById(userId: string){
    return this.angularFire.database.object('/users/'+ userId);
  }


  updateUser(localUpdatedUser){
    var userEntryInFirebase = this.getUserById(localUpdatedUser.$key);
    userEntryInFirebase.update({
      name: localUpdatedUser.name,
      location: localUpdatedUser.location,
      email: localUpdatedUser.email,
      image: localUpdatedUser.image,
      projectList: localUpdatedUser.projectList
    });
  }

  deleteUser(localUserToDelete){
    var userEntryInFirebase = this.getUserById(localUserToDelete.$key);
    userEntryInFirebase.remove();
  }
}
