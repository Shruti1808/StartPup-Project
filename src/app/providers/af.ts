import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, AngularFireAuth, FirebaseAuthState} from 'angularfire2';

@Injectable()

export class AF {
  public users: FirebaseListObservable<any>;
  public currentUser;
  public displayName: string;
  public email: string;
  public uid: string;
  public authState;

  constructor(public af: AngularFire, public auth: AngularFireAuth) {
    this.auth.subscribe((state: FirebaseAuthState) => {
     this.authState = state;
     console.log("I AM AUTH STATE");
           console.log(this.authState);
       });
   }

   get authenticated(): boolean {
       return this.authState !== null;
  }
  /**
  * Logs out the current user
  */
  logout() {
    return this.af.auth.logout();
  }

  /**
  * Calls the AngularFire2 service to register a new user
  * @param model
  * @returns {firebase.Promise<void>}
  */
  registerUser(email, password) {
    console.log(email)
    return this.af.auth.createUser({
      email: email,
      password: password
    });
  }
  /**
  * Saves information to display to screen when user is logged in
  * @param uid
  * @param model
  * @returns {firebase.Promise<void>}
  */
  saveUserInfoFromForm(uid, name, email): any {
    return this.af.database.object('users/' + uid).set({
      name: name,
      email: email,
    });
  }
  /**
  * Logs the user in using their Email/Password combo
  * @param email
  * @param password
  * @returns {firebase.Promise<FirebaseAuthState>}
  */
  loginWithEmail(email, password) {
    return this.af.auth.login({
      email: email,
      password: password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }
}
