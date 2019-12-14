

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Task, ITask} from '../models/task';

import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
  constructor(private _httpClient: HttpClient) {}

  public getAllTasks(search: string = ''): Observable<Task[]> {
    return this._httpClient
      .get<ITask[]>(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`)
      .map((tasks: ITask[]) => {
        return tasks.map((task: ITask) => {
          const newTask: Task = new Task();
          newTask.title = task.title;
          newTask.description = task.description;
          newTask.id = task.id;
          return newTask;
        });
      });
  }

  public getSingleTask(id: number): Observable<Task> {
    return this._httpClient
      .get<ITask>(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`)
      .map((task: ITask) => {
        const newTask: Task = new Task();
        newTask.title = task.title;
        newTask.description = task.description;
        newTask.id = task.id;
        return newTask;
      });
  }
}
