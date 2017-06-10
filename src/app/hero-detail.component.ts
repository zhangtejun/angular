//����ļ��л�������µ�HeroDetailComponent��
/**
�ļ������������ѭ���ָ���еı�׼��ʽ��
���������Ӧ���Ǵ��շ���ʽ��������Component��β�� ���Ӣ�����������������HeroDetailComponent��
������ļ���Ӧ����Сд������ʽ��ÿ������֮�������߷ָ���������.component.ts��β�� ���HeroDetailComponent��Ӧ�÷���hero-detail.component.ts�ļ��С�
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

	//ͨ����hero����ǰ�����@Inputװ����������������һ����������
	@Input()hero: Hero;//���԰󶨵����ϣ�hero���Ե�������Hero
	
	//Ȼ��ע��ActivatedRoute��HeroService���񵽹��캯���У������ǵ�ֵ���浽˽�б����У�
	//location�������������ʷ��ջ
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