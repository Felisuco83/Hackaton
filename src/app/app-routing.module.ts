import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
// import { JobsComponent } from './components/jobs/jobs.component';
const appRoutes: Routes = [
  { path: '', component: UserComponent },
  // { path: 'insertar', component: InsertarComponent },
  // { path: 'eliminar/:iddepartamento', component: DepartamentosComponent },
  // { path: 'modificar/:iddepartamento', component: ModificarComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
