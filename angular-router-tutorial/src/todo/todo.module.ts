import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TaskService} from './services/task.service';
import {TodoRoutingModule} from './todo-routing/todo-routing.module';
import {ListPageComponent} from './components/list-page/list-page.component';
import {DetailPageComponent} from './components/detail-page/detail-page.component';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListPageComponent, DetailPageComponent, SearchComponent],
  imports: [
    HttpClientModule,
    TodoRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TodoModule {

}
