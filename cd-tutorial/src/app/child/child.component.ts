import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() public message: string;

  public stam: string;

  constructor(private _http: HttpClient, private _cd: ChangeDetectorRef) {
  }

  ngOnInit() {

    setTimeout(() => {
      console.log('is change detection runs on async?');
      this._cd.markForCheck();
    }, 3000);

    // this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').subscribe((json: any) => {
    //   this.stam = 'wat????';
    // });
  }



  public detectCD() {
    console.log('change detection is running on the child');
  }

}
