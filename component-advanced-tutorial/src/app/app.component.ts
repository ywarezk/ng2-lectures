import {
  Component, OnChanges, ViewEncapsulation, SimpleChanges, DoCheck, AfterContentInit, ViewContainerRef,
  ViewChild, ComponentFactoryResolver
} from '@angular/core';
import {Task1Component} from './task1/task1.component';
import {Task2Component} from './task2/task2.component';
import {Task3Component} from './task3/task3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  title = 'app';
  takeFromParent = 'trying to check after content init';
  removeChild = false;
  private _listTasks = [Task1Component, Task2Component, Task3Component];
  @ViewChild('placeholder', {read: ViewContainerRef}) dynamicComponentsPlaceholder: ViewContainerRef;
  @ViewChild('placeholder2', {read: ViewContainerRef}) dynamicComponentsPlaceholder2: ViewContainerRef;

  constructor(private _resolver: ComponentFactoryResolver ) {
    console.log('parent constructor');
    setTimeout(() => {
      this.title = 'wat';
      this.removeChild = true;
    }, 3000);
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log('parent ngOnChanges');
  }

  public ngOnInit() {
    console.log('parent ngOnInit');
    const num1 = Math.floor(Math.random() * 3);
    const num2 = Math.floor(Math.random() * 3);
    const componentFactory1 = this._resolver.resolveComponentFactory(this._listTasks[num1]);
    const componentFactory2 = this._resolver.resolveComponentFactory(this._listTasks[num2]);
    this.dynamicComponentsPlaceholder.createComponent(componentFactory1);
    this.dynamicComponentsPlaceholder.createComponent(componentFactory2);
    // this.dynamicComponentsPlaceholder2.createComponent(componentFactory2);

  }

  public ngDoCheck() {
    console.log('parent ngDoCheck');
  }

  public something() {
    console.log('something happened');
  }

  public ngAfterContentInit() {
    console.log('parent ngAfterContentInit');
  }

  public ngAfterViewInit() {
    console.log('parent ngAfterViewInit');
  }

  public ngAfterViewChecked() {
    console.log('parent ngAfterViewChecked');
  }



}
