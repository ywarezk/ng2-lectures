import {Component} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/task';
import {ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'nz-list-page',
  template: `
    <h1>
      Tasks list
    </h1>
    <nz-search></nz-search>
    <ul>
      <li *ngFor="let task of tasks">
        <a [routerLink]="'/tasks/' + task.id">
          {{task.title}}
        </a>
      </li>
    </ul>
  `
})
export class ListPageComponent {
  public tasks: Task[] = [];

  constructor(private _taskService: TaskService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.queryParams
      .map((params: Params) => {
        return params.search;
      })
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((search: string) => {
      this._taskService.getAllTasks(search).subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
    });
  }
}
