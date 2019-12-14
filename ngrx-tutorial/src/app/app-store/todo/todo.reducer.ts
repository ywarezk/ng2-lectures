import {Task} from '../../models/task';
import {Actions as TodoActions, TasksSuccess, TodoActionsTypes} from './todo.actions';


export interface ITodo {
  isLoadingFromServer: boolean;
  todoItems: Task[];
}

const initialTodo: ITodo = {
  isLoadingFromServer: true,
  todoItems: []
}

export function todo(state = initialTodo, action: TodoActions): ITodo {
  switch (action.type) {
    case TodoActionsTypes.TASKS_START:
      return {...state, isLoadingFromServer: true};
    case TodoActionsTypes.TASKS_SUCCESS:
      return {...state, isLoadingFromServer: false, todoItems: (<TasksSuccess>action).payload};
    default:
      return state;
  }
}
