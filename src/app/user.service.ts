import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { User } from './user.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  user;
  public userProjects;
  public localUserProjects = [];

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
      image: localUpdatedUser.image
    });
  }

  deleteUser(localUserToDelete){
    var userEntryInFirebase = this.getUserById(localUserToDelete.$key);
    userEntryInFirebase.remove();
  }

  addProjectToUser(userId, projectKey) {
    this.angularFire.database.list('/users/' + userId + '/projects/').push(true);
  }

  getUserProjects(userId) {
    this.userProjects = this.angularFire.database.list('/users/'+ userId + '/projects/');
    return this.userProjects.subscribe(userProjects => this.localUserProjects = userProjects);
  }
}
