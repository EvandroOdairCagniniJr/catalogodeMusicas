import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

import { MusicaApi }
from '../../services/musica-api';

@Component({
  selector: 'app-cadastro-musica',

  standalone: true,

  imports: [
    ReactiveFormsModule
  ],

  templateUrl: './cadastro-musica.html',

  styleUrl: './cadastro-musica.css'
})

export class CadastroMusica {

  constructor(
    private musicaApi: MusicaApi
  ){}

  formulario = new FormGroup({

    nome: new FormControl(''),

    artista: new FormControl(''),

    genero: new FormControl(''),

    duracao: new FormControl(''),

    album: new FormControl(''),

    imagem: new FormControl('')

  });

  salvar(){

    this.musicaApi
      .create(this.formulario.value)
      .subscribe(() => {

        alert('Música cadastrada com sucesso!');

      });

  }

}