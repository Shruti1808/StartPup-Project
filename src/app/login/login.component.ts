import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AF } from '../providers/af';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: any;
  @Output() closeLogin = new EventEmitter();

  constructor(public afService: AF, private router: Router) { }

  ngOnInit() {
  }

  loginWithEmail(event, email, password){
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {
      this.closeLogin.emit();
      this.router.navigate(['']);
    })
    .catch((error: any) => {
      if (error) {
        this.error = error;
        console.log(this.error);
      }
    });
  }
}
