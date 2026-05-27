import { Component } from '@angular/core';

import { CardMusica }
from '../../components/card-musica/card-musica';

import { Favoritos }
from '../../services/favoritos';

@Component({
  selector: 'app-musicas',
  standalone: true,

  imports: [],

  templateUrl: './musicas.html',
  styleUrl: './musicas.css'
})

export class Musicas {

  constructor(
    public favoritos: Favoritos
  ){}

  musicas = [

    {
      nome:'Zé Neto & Cristiano',
      artista:'Bora Tomar Uma',
      genero:'Sertanejo',
      duracao:'3:00'
    },

    {
      nome:'Henrique & Juliano',
      artista:'Aquela Pessoa',
      genero:'Sertanejo',
      duracao:'3:00'
    },

    {
      nome:'Nosso Lugar',
      artista:'MC Kevin',
      genero:'Funk',
      duracao:'4:00'
    },

    {
      nome:'Shape of You',
      artista:'Ed Sheeran',
      genero:'Pop',
      duracao:'3:53'
    },

    {
      nome:'Levitating',
      artista:'Dua Lipa',
      genero:'Pop',
      duracao:'3:23'
    }

  ];

  adicionarFavorito(musica:any){

    this.favoritos['favoritos'].push(musica);

  }

}