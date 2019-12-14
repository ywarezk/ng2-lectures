import {Action} from '@ngrx/store';
import {Task} from '../../models/task';

export class TodoActionsTypes {
  static TASKS_START = '[Todo] TASKS_START';
  static TASKS_SUCCESS = '[Todo] TASKS_SUCCESS';
}

export class TasksStart implements Action {
  public readonly type = TodoActionsTypes.TASKS_START;
}

export class TasksSuccess implements Action {
  public readonly type = TodoActionsTypes.TASKS_SUCCESS;
  constructor(public payload: Task[]) { }
}

export type Actions = TasksStart | TasksSuccess;
