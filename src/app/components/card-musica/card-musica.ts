import {
Component,
Input,
Output,
EventEmitter
} from '@angular/core';

import { RouterLink }
from '@angular/router';

@Component({
  selector:'app-card-musica',

  standalone:true,

  imports:[
    RouterLink
  ],

  templateUrl:'./card-musica.html',

  styleUrl:'./card-musica.css'
})

export class CardMusica {

  @Input()
  musica:any;

  @Output()
  favoritar =
  new EventEmitter<any>();

}