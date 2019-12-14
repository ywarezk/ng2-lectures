import {ITodo, todo} from './todo/todo.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface IAppState {
  todo: ITodo;
}

export let appReducers: ActionReducerMap<IAppState> = {
  todo: todo
};
