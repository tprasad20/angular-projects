import { Injectable } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://192.168.1.100:80/springmvcjavaconfig/heroes/';
 
  constructor(private http:HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    //return of(HEROES);
   return this.http.get<Hero[]>(this.heroesUrl)


  }

}
