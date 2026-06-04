import { Component } from '@angular/core';

import { Favoritos as FavoritosService }
from '../../services/favoritos';

@Component({
  selector:'app-favoritos',
  standalone:true,

  imports:[],

  templateUrl:'./favoritos.html',
  styleUrl:'./favoritos.css'
})

export class FavoritosPage {

  constructor(
    public favoritosService:FavoritosService
  ){}

  remover(musica:any){

    this.favoritosService.favoritos =
    this.favoritosService.favoritos.filter(
      (item:any) => item !== musica
    );

  }

}