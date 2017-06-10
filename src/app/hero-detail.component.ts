//这个文件中会存放这个新的HeroDetailComponent。
/**
文件名和组件名遵循风格指南中的标准方式。
组件的类名应该是大驼峰形式，并且以Component结尾。 因此英雄详情组件的类名是HeroDetailComponent。
组件的文件名应该是小写中线形式，每个单词之间用中线分隔，并且以.component.ts结尾。 因此HeroDetailComponent类应该放在hero-detail.component.ts文件中。
**/
//import { Component ,Input  } from '@angular/core';

import 'rxjs/add/operator/switchMap';
// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';




@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
	<button (click)="save()">Save</button>
  `,
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {

	//通过在hero属性前面加上@Input装饰器，来表明它是一个输入属性
	@Input()hero: Hero;//属性绑定到类上，hero属性的类型是Hero
	
	//然后注入ActivatedRoute和HeroService服务到构造函数中，将它们的值保存到私有变量中：
	//location服务，浏览器的历史堆栈
	constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
	) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}

save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}
goBack(): void {
    this.location.back();
  }
	
}