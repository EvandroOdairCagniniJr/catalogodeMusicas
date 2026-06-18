import { Component } from '@angular/core';

import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import { CommonModule }
from '@angular/common';

import { MusicaApi }
from '../../services/musica-api';

@Component({
  selector: 'app-detalhes-musica',

  standalone: true,

  imports: [
    RouterLink,
    CommonModule
  ],

  templateUrl: './detalhes-musica.html',

  styleUrl: './detalhes-musica.css'
})

export class DetalhesMusica {

  id:string = '';

  musica:any = null;

  constructor(

    private route:ActivatedRoute,

    private router:Router,

    private musicaApi:MusicaApi

  ){

    this.id =
    this.route.snapshot.paramMap.get('id')
    || '';

    this.musicaApi
      .getById(this.id)
      .subscribe(dados => {

        this.musica = dados;

      });

  }

  excluir(){

    this.musicaApi
      .delete(this.id)
      .subscribe(() => {

        alert('Música excluída com sucesso!');

        this.router.navigate([
          '/catalogo'
        ]);

      });

  }

}