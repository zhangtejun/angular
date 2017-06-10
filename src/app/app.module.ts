import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

//HttpModule并不是 Angular 的核心模块。 它是 Angular 用来进行 Web 访问的一种可选方式，并位于一个名叫 @angular/http //的独立附属模块中，并作为 Angular 的 npm 包之一而发布出来。
import { HttpModule }    from '@angular/http';//



/**组件，服务**/
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppRoutingModule }     from './app-routing.module';//路由模块






//每个组件都必须在一个（且只有一个）Angular模块中声明。
//Every component must be declared in one—and only one—Angular module.
//每个 Angular 应用都有一个根模块类。 按照约定，它的类名叫做AppModule，被放在app.module.ts文件中。

@NgModule({
  imports:      [ //Angular 模块把特性合并成离散单元的一种方式。https://angular.cn/docs/ts/latest/guide/appmodule.html
				  BrowserModule,
				  FormsModule,
				  AppRoutingModule,
				  HttpModule,
				  InMemoryWebApiModule.forRoot(InMemoryDataService),
				], // <-- import the FormsModule before binding with [(ngModel)]
				
//组件、指令和管道 — 属于declarations数组。 不要将其他类型的类添加到declarations中，例如NgModule类, 服务类，模型类。
//声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
  declarations: [ //通过将其列到AppModule模块的declarations数组中，可以告诉 Angular 哪个组件属于AppModule
				  AppComponent ,
				  HeroDetailComponent ,
				  HeroesComponent ,
				  DashboardComponent,
				  HeroSearchComponent
				],//declarations数组包含应用中属于该模块的组件、管道和指令的列表
				
//服务的创建者，并加入到全局服务列表中，可用于应用任何部分
  providers:    [//根注入器注册模块
				  HeroService
				],
				
//bootstrap 根组件，Angula创建它并插入index.html宿主页面.
//@NgModule.bootstrap属性把这个AppComponent标记为引导 (bootstrap) 组件		
  bootstrap:    [ 
				  AppComponent 
				],
				
//exports - declarations 的子集，可用于其它模块的组件模板。
	exports:    [
	]
})
export class AppModule { }
