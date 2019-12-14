import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  public hello = '';

  constructor() {

    // this._zone.onTurnDone
    // console.log(this._zone.)
  }

  public someMethod() {
    console.log('user clicks the button');
    this.hello += 'a';
  }

  public detectCD() {
    console.log('change detection is running on the parent');
  }
}
