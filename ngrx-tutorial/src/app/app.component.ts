import {Component, OnInit} from '@angular/core';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _todoService: TodoService) {}

  public ngOnInit() {
    this._todoService.getAllTasks().subscribe();
  }
}
