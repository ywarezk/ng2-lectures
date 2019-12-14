/**
 * <div *appMyIf="expression">...</div>
 */

import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
  @Input('appMyIf') public set appMyIf(value: boolean) {
    if (value) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<any>) { }

}
