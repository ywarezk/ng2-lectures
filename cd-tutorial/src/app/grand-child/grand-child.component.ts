import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent implements OnInit {

  constructor(private _cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('running mark for check on child');
    //   this._cd.detectChanges();
    // }, 4000);
  }

  public detectCD() {
    console.log('grand child CD');
  }

}
