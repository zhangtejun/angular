import { Injectable } from '@angular/core';//导入了 Angular 的Injectable函数

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class HeroService {
	/*
	getHeroes(): Hero[] {
		return HEROES;
  }*/
  
   getHeroes_bak(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  
  getHero_bak(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}



//Use http
private heroesUrl = 'api/heroes';  // URL to web api
constructor(private http: Http) { }
  
getHeroes(): Promise<Hero[]> {
	console.info('test  URL to web api is ok'); // for demo purposes only
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  
getHero(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  debugger;
  console.info('test getHero URL to web api is ok');
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
}


private headers = new Headers({'Content-Type': 'application/json'});
update(hero: Hero): Promise<Hero> {
  const url = `${this.heroesUrl}/${hero.id}`;
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
}

create(name: string): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Hero)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

  
}
