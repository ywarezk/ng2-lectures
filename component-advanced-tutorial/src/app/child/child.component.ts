import {Component, ContentChild, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements DoCheck, OnChanges {
  @Input() title: string;
  public stam = 'checking the ng on init';
  public toTest = 'hello world in input';

  constructor() {
    console.log('child constructor');
  }

  public ngOnChanges(change: SimpleChanges) {
    console.log('child ngOnChanges');
  }

  public ngDoCheck() {
    console.log('child ngDoCheck');
  }

  public ngAfterContentInit() {
    console.log('child ngAfterContentInit');
  }

  public ngOnInit() {
    console.log('child ngOnInit');
  }

  public ngAfterContentChecked() {
    console.log('child ngAfterContentChecked');
  }

  public ngOnDestroy() {
    console.log('need to do the cleanup now');
  }




}
