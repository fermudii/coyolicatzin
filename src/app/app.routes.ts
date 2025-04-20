import { Routes } from '@angular/router';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {MainComponent} from './core/components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Coyolicatzin',
    component: MainComponent,
  },
  {
    path: '**',
    title: 'Pagina no encontrada',
    component: NotFoundComponent,
  }
];
