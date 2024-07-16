import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeStoreService {
  params: any;
  constructor(private http: HttpClient){}
  // getanime: any;
  getAnimeStore() {
    throw new Error('Method not implemented.');
  }
  forEach(arg0: (animeStore: any) => void) {
    throw new Error('Method not implemented.');
  }
  private jsonURL = '/assets/addtocart.json';
  

  getanime(): Observable<any> {
    return this.http.get<any>(this.jsonURL);

  }
}
