import { Routes } from '@angular/router';
import { designerRoutes } from './routes/designer.routes';
import { printRoutes } from './routes/print.routes';
import { entityRoutes } from './routes/entity.routes';

export const routes: Routes = [
  ...designerRoutes,
  ...printRoutes,
  ...entityRoutes,
  {
    path: '',
    redirectTo: 'entities/monsters',
    pathMatch: 'full',
  },
];
