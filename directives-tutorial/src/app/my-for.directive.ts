/**
 * <div *appMyFor="let task of tasks" ></div>
 */

import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective {
  @Input('appMyForOf') set appMyForOf(value: any) {
    this._viewContainer.clear();
    for (const item of value) {
      this._viewContainer.createEmbeddedView(this._templateRef, {
        $implicit: item
      });
    }
  }

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

}
