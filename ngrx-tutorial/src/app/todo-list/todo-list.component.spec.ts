import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '../app-store/reducers';
import {Task} from '../models/task';
import {By} from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports: [StoreModule.forRoot(appReducers, {initialState: {
        todo: {
          todoItems: [
            new Task({title: 'test1', description: 'test1 description', id: 1}),
            new Task({title: 'test2', description: 'test2 description', id: 2}),
          ],
          isLoadingFromServer: false
        }
      }})]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect to have 2 lis', () => {
    const lis = fixture.debugElement.queryAll(By.css('li'));
    expect(lis.length).toBe(2);
  });
});
