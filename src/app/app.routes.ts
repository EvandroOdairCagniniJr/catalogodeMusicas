import { Routes } from '@angular/router';

import { Home }
from './pages/home/home';

import { Musicas }
from './pages/musicas/musicas';

import { FavoritosPage }
from './pages/favoritos/favoritos';

import { Sobre }
from './pages/sobre/sobre';

import { CadastroMusica }
from './pages/cadastro-musica/cadastro-musica';

import { DetalhesMusica }
from './pages/detalhes-musica/detalhes-musica';

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
    path:'catalogo/:id',
    component:DetalhesMusica
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
  path:'cadastro',
  component:CadastroMusica
  },

  {
  path:'cadastro/:id',
  component:CadastroMusica
  },

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }

];