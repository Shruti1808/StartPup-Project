import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';


import { AF } from "./providers/af";
import { masterFirebaseConfig } from './api-keys';

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
import { AngularFireModule } from 'angularfire2';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { UserProjectComponent } from './user-project/user-project.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { NeedComponent } from './need/need.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { EditNeedComponent } from './edit-need/edit-need.component';
import { AddNeedComponent } from './add-need/add-need.component';
import { SocialMediaComponent } from './social-media/social-media.component';

import { KeysPipe } from './keys.pipe';


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
    EditUserComponent,
    NewProjectComponent,
    UserProjectComponent,
    TwitterTimelineComponent,
    NeedComponent,
    EditProjectComponent,
    CompleteProfileComponent,
    EditNeedComponent,
    AddNeedComponent,
    KeysPipe,
    SocialMediaComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
