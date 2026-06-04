import { Routes } from '@angular/router';

import { Home }
from './pages/home/home';

import { Musicas }
from './pages/musicas/musicas';

import { FavoritosPage }
from './pages/favoritos/favoritos';

import { Sobre }
from './pages/sobre/sobre';

export const routes: Routes = [

  {
    path:'home',
    component:Home
  },

  {
    path:'catalogo',
    component:Musicas
  },

  {
    path:'favoritos',
    component:FavoritosPage
  },

  {
    path:'sobre',
    component:Sobre
  },

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }

];