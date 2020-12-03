import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
// import { JobsComponent } from './components/jobs/jobs.component';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users', component: UserComponent },
  { path: 'jobs', component: JobsComponent },
  //{ path: 'user/:iddepartamento', component: DepartamentosComponent },
  // { path: 'modificar/:iddepartamento', component: ModificarComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
