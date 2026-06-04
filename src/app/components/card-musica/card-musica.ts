import {
Component,
Input,
Output,
EventEmitter
} from '@angular/core';

@Component({
  selector:'app-card-musica',
  standalone:true,

  imports:[],

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