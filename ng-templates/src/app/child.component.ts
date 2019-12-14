/**
 * Created by yarivkatz on 21/12/2017.
 */

import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'jb-child, .jb-child',
  exportAs: 'child',
  template: `
  <h1 [hidden]="!isVisible">
    {{message}}
  </h1>
  <button (click)="toggleVisibility()">
    Toggle Visibility
  </button>
  <input type="text" [value]="textInput" (input)="textInputChange.emit($event.target.value);" />
  `
})
export class ChildComponent {
  @Input() message: string = 'hello from child2';
  @Input() textInput: string;
  @Output() textInputChange: EventEmitter<string> = new EventEmitter();
  @Output() public visibilityButtonClicked: EventEmitter<boolean> = new EventEmitter();

  public isVisible: boolean = true;

  public toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.visibilityButtonClicked.emit(this.isVisible);
  }
}
