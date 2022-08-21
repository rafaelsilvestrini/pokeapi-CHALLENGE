import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private http: HttpClient
  ) { }

  allPoke() {
    var url = `${environment.api}pokemon?limit=100000&offset=0`
    return this.http.get(url).toPromise().then(data => data)
  }

  getPokemonURL(url: string) {
    return this.http.get(url).toPromise().then(data => data)
  }

  getTypePoke() {
    var url = `${environment.api}type`
    return this.http.get(url).toPromise().then(data => data)
  }


}