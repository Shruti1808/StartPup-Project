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
    return this.angularFire.database.object('users/'+ userId);
  }
}
