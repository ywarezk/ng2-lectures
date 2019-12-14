
import {NgModule} from '@angular/core';
import {CanActivate, RouterModule} from '@angular/router';
import {AboutPageComponent} from '../components/about-page/about-page.component';
import {HomePageComponent} from '../components/home-page/home-page.component';
import {Error404PageComponent} from '../components/error404-page/error404-page.component';
import {Parent1Component} from '../components/parent1/parent1.component';
import {Child1Component} from '../components/child1/child1.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'todo', loadChildren: '../../todo/todo.module#TodoModule'},
      {path: '', component: HomePageComponent},
      {path: 'about', component: AboutPageComponent},
      {
        path: 'nesting', component: Parent1Component, children: [
          {path: '', component: Parent1Component},
          {path: 'child', component: Child1Component}
        ]
      },
      {path: '**', component: Error404PageComponent},

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

