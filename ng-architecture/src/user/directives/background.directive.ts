/**
 * Created by yarivkatz on 12/12/2017.
 */

import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '.jb-background'
})
export class BackgroundDirective{
  constructor(private _element: ElementRef){
    _element.nativeElement.style.backgroundColor = 'red';
  }
}
