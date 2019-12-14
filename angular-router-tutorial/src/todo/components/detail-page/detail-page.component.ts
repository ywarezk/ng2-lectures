import {Component} from '@angular/core';
import {Task} from '../../models/task';
import {ActivatedRoute, Params} from '@angular/router';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'nz-detail-page',
  template: `
    <h1>
      Detail page about the single component
    </h1>
    <p>
      <strong>
        title
      </strong>
      {{task?.title}}
    </p>
    <p>
      <strong>
        description
      </strong>
      {{task?.description}}
    </p>
  `
})
export class DetailPageComponent {
  public task: Task;

  constructor(private _activatedRoute: ActivatedRoute, private _taskService: TaskService) {
    this._activatedRoute.params.subscribe((params: Params) => {
      this._taskService.getSingleTask(params.id).subscribe((task: Task) => {
        this.task = task;
      });
    });
  }
}
