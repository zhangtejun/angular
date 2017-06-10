import { Component ,OnInit} from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';

/**
*let是块级作用域，函数内部使用let定义后，对函数外部无影响
*@Component装饰器，它把紧随其后的类标记成了组件类。https://angular.cn/docs/ts/latest/guide/architecture.html
**/
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
  
  
  //已在app.module.ts定义
 // providers: [HeroService]//providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。 //AppComponent会使用那个服务来获取英雄列表，在它组件树中的每一个子组件也同样如此。
  
})
export class HeroesComponent implements OnInit { 
name = 'Angular'; 
title = 'Tour of Heroes from heroes';
selectedHero: Hero;

heroes: Hero[];//添加一个尚未初始化的heroes属性

//添加构造函数。构造函数自己什么也不用做，它在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点。
//现在，当创建AppComponent实例时，Angular 知道需要先提供一个HeroService的实例。
//通常会把提供商添加到根模块上，以便在任何地方都使用服务的同一个实例
constructor(private heroService: HeroService,
private router: Router) {}
getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
add(name: string): void {
  name = name.trim();
  if (!name) { 
	console.info('name is null');
	alert('name must not null ')
	return; 
  }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}

delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}
 
  

/*

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
*/
}
