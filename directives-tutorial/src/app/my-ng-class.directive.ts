import {
  Directive, ElementRef, HostListener, Input, OnInit, Renderer2, IterableDiffers, KeyValueDiffers, OnChanges,
  DoCheck, SimpleChange, SimpleChanges, KeyValueDiffer, KeyValueChanges, KeyValueChangeRecord, ChangeDetectorRef
} from '@angular/core';

@Directive({
  selector: '[appMyNgClass]'
})
export class MyNgClassDirective implements DoCheck, OnChanges {
  @Input('appMyNgClass') public classObject: {[key: string]: boolean};
  private _differ: KeyValueDiffer<string, boolean>;

  constructor(
    private _element: ElementRef,
    private _render: Renderer2,
    private _differs: KeyValueDiffers,
    private _differs2: IterableDiffers,
    private _cd: ChangeDetectorRef
  ) {
  }

  private _removeAllInputClasses(value) {
    for (const key of Object.keys(value)) {
      this._render.removeClass(this._element.nativeElement, key);
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    this._differs2.find([1,2,3]).create()
    if ('classObject' in changes) {
      const value = changes['classObject'].currentValue;
      if (value) {
        this._differ = this._differs.find(value).create();
      }
    }
  }

  public ngDoCheck(): void {
    const changes: KeyValueChanges<string, boolean> = this._differ.diff(this.classObject);
    if (changes) {
      // changes.forEachItem((r: KeyValueChangeRecord) => { // will track the changes
      // })
    }
  }

  @HostListener('mouseover', ['$event'])
  public onMouseOver(event) {
    console.log('user hovered over');
  }

}
