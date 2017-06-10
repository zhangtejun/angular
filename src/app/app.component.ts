import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h2>{{title}}</h2>
	<nav>
	 <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
	
   <router-outlet></router-outlet>
    
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes form Component --Angular';
}

//Angular路由器提供了routerLinkActive指令，我们可以用它来为匹配了活动路由的 HTML 导航元素自动添加一个 CSS 类
