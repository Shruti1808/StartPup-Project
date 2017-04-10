import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
