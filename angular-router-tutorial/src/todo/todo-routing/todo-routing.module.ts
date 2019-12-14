import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListPageComponent} from '../components/list-page/list-page.component';
import {DetailPageComponent} from '../components/detail-page/detail-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'tasks', component: ListPageComponent
      },
      {
        path: 'tasks/:id', component: DetailPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class TodoRoutingModule {

}
