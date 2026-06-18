import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritosApi {

  private http = inject(HttpClient);

  private apiUrl =
    'https://catalogodemusicas-c730b-default-rtdb.firebaseio.com/favoritos';

  create(favorito:any){
    return this.http.post(
      `${this.apiUrl}.json`,
      favorito
    );
  }

  getAll(){
    return this.http.get(
      `${this.apiUrl}.json`
    );
  }

  delete(id:string){
    return this.http.delete(
      `${this.apiUrl}/${id}.json`
    );
  }

}