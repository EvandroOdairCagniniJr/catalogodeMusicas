import { Component } from '@angular/core';

import { CommonModule }
from '@angular/common';

import { CardMusica }
from '../../components/card-musica/card-musica';

import { Favoritos }
from '../../services/favoritos';

import { FavoritosApi }
from '../../services/favoritos-api';

import { MusicaApi }
from '../../services/musica-api';
@Component({

  selector: 'app-musicas',

  standalone: true,

  imports: [
    CommonModule,
    CardMusica
  ],

  templateUrl: './musicas.html',

  styleUrl: './musicas.css'

})

export class Musicas {

  constructor(
  public favoritos: Favoritos,
  private favoritosApi: FavoritosApi,
  private musicaApi: MusicaApi
){}

  musicas:any[] = [];

  ngOnInit(){

  this.musicaApi
    .getAll()
    .subscribe((dados:any) => {

      console.log(dados);

      this.musicas = [];

      for(const key in dados){

        this.musicas.push({

          firebaseId: key,

          ...dados[key]

        });

      }

    });

}

  adicionarFavorito(musica:any){

  this.favoritos.favoritos.push(musica);

  this.favoritosApi
    .create(musica)
    .subscribe(() => {

      alert('Adicionado aos favoritos!');

    });

  }

}