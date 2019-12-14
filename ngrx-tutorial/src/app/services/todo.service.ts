import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ITask, Task} from '../models/task';

import 'rxjs/add/operator/map';
import {Store} from '@ngrx/store';
import {IAppState} from '../app-store/reducers';
import {TasksSuccess} from '../app-store/todo/todo.actions';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {
  constructor(private _http: HttpClient, private _store: Store<IAppState>) {}

  getAllTasks(): Observable<Task[]> {
    return this._http
      .get<ITask[]>('https://nztodo.herokuapp.com/api/task/?format=json')
      .map((tasks: ITask[]) => {
        const tasksObj: Task[] = tasks.map((task: ITask) => new Task(task))
        this._store.dispatch(new TasksSuccess(tasksObj));
        return tasksObj;
      });
  }
}
