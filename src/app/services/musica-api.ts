import { HttpClient }
from '@angular/common/http';

import { inject, Injectable }
from '@angular/core';

import { Observable }
from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class MusicaApi {

  private http =
  inject(HttpClient);

  private apiUrl =
  'https://catalogodemusicas-c730b-default-rtdb.firebaseio.com/musicas';

  private sufix =
  '.json';

  getAll():
  Observable<any[]>{

    return this.http.get<any[]>(
      this.apiUrl + this.sufix
    );

  }

  getById(id:string){

  return this.http.get(
    `${this.apiUrl}/${id}.json`
  );

}

create(musica:any){
  return this.http.post(
    `${this.apiUrl}.json`,
    musica
  );
}

update(id:string,musica:any){

  return this.http.put(
    `${this.apiUrl}/${id}.json`,
    musica
  );

}

delete(id:string){

  return this.http.delete(
    `${this.apiUrl}/${id}.json`
  );

}

}