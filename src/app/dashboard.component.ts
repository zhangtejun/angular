import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	
    })

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];//创建一个heroes数组属性
  constructor(private heroService: HeroService) { }//在构造函数中注入HeroService，并且把它保存在一个私有的heroService字段中。
  ngOnInit(): void {
	  /*
	this.heroes = this.heroService.getHeroes();
    this.heroes = this.heroes.slice(1, 5);*/
	this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}


