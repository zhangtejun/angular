import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//Ĭ��·��
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  //���һ��·���е�**·����һ��ͨ��������������URL��ƥ��ǰ�涨���·�ɱ��е��κ�·��ʱ��·�����ͻ�ѡ���·�ɡ� ������Կ�������ʾ��404 - Not Found��ҳ�����Զ��ض�������·�ɡ�
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
