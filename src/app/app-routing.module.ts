import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  // { path: '', component: DepartamentosComponent },
  // { path: 'insertar', component: InsertarComponent },
  // { path: 'eliminar/:iddepartamento', component: DepartamentosComponent },
  // { path: 'modificar/:iddepartamento', component: ModificarComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
