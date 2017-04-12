import { Injectable } from '@angular/core';
import { FirebaseAuthState } from 'angularfire2';
import { AF } from "./providers/af";

@Injectable()
export class AuthService {
  private _authState: FirebaseAuthState = null;

  constructor(public afService: AF, public auth: FirebaseAuthState ) {
    this.auth.subscribe((state: FirebaseAuthState) => {
      this._authState = state;
    });
  }

  get authenticated(): boolean {
    return this._authState !== null;
  }

  get authState(): FirebaseAuthState {
    return this._authState;
  }
}
