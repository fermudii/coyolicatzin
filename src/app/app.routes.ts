import { Routes } from '@angular/router';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {MainComponent} from './core/components/main/main.component';
import {BodaComponent} from './modules/boda/boda.component';
import {ContactoComponent} from './modules/contacto/contacto.component';
import {BioComponent} from './modules/bio/bio.component';
import {MusicaComponent} from './modules/musica/musica.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Coyolicatzin',
    component: MainComponent,
  },
  {
    path: 'boda',
    title: 'Boda!',
    component: BodaComponent,
  },
  {
    path: 'musica',
    title: 'Musica!',
    component: MusicaComponent
  },
  {
    path: 'bio',
    title: 'Bio!',
    component: BioComponent
  },
  {
    path: 'contacto',
    title: 'Contacto!',
    component: ContactoComponent,
  },
  {
    path: '**',
    title: 'Pagina no encontrada',
    component: NotFoundComponent,
  }
];
