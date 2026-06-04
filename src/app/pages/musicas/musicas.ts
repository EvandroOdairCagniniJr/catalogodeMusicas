import { Component } from '@angular/core';

import { CardMusica } from '../../components/card-musica/card-musica';
import { Favoritos } from '../../services/favoritos';

@Component({
  selector: 'app-musicas',
  standalone: true,

  imports: [
    CardMusica
  ],

  templateUrl: './musicas.html',
  styleUrl: './musicas.css'
})

export class Musicas {

  constructor(
    public favoritos: Favoritos
  ) {}

  musicas = [

  {
    nome:'Incondicional',
    artista:'Luan Santana',
    genero:'Sertanejo',
    duracao:'3:00',
    imagem:'https://thf.bing.com/th/id/OIP.f25z2JGeuqLK3gYMZ-WDjwHaHa?w=108&h=108&c=1&bgcl=0a9729&r=0&o=7&pid=ImgRC&rm=3.jpg'
  },

  {
    nome:'Nosso Lugar',
    artista:'MC Kevin',
    genero:'Funk',
    duracao:'4:00',
    imagem:'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c5/8f/f9/c58ff927-beac-41de-f308-defd71687b09/00194491451899_Cover.jpg/600x600cc.webp.jpg'
  },

  {
    nome:'A Hora É Agora',
    artista:'Jorge & Mateus',
    genero:'Sertanejo',
    duracao:'3:00',
    imagem:'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f4/64/f8/f464f808-b6c7-d657-4835-afc855a35acc/7891430263324.jpg/600x600cc.webp.jpg'
  }

];

  adicionarFavorito(musica: any) {

    this.favoritos['favoritos'].push(musica);

  }

}