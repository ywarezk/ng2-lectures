import {AfterViewInit, Directive, ElementRef, Inject, Input, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

declare var $: any;

@Directive({
  selector: '[nzLadda]'
})
export class LaddaDirective {
  @Input('nzLadda') public set isLoading(val: boolean) {
    if (!isPlatformBrowser(this._platform)) {
      return;
    }
    if (val) {
      this._l.ladda('start');
    } else {
      this._l.ladda('stop');
    }
  }
  private _l: any;

  constructor(private _element: ElementRef, @Inject(PLATFORM_ID) private _platform: Object) {
    if (isPlatformBrowser(this._platform)) {
      this._l = $(this._element.nativeElement).ladda();
    }
  }
}
