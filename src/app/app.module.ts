import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';



import { AppComponent } from './app.component';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NewSocialmediaComponent } from './new-socialmedia/new-socialmedia.component';
import { UserProjectComponent } from './user-project/user-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    UserDetailComponent,
    ProjectListComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    SideBarComponent,
    NewProjectComponent,
    NewContactComponent,
    NewSocialmediaComponent,
    UserProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
