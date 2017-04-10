import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
