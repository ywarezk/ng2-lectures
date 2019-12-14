import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from "./child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public fromHtmlVar: string = `<span class="stam">hello red</span>`;
  public randomNumber: number = Math.random();
  public hoverCounter: number = 0;
  public twoWayExample: string = 'hello world';
  public twoWayExample2: string = 'hello world2';
  @ViewChild('whatWillIGet') public viewChildComponent: ChildComponent;
  public myObjectWithTitle = null;

  constructor() {
    setTimeout(() => {
      this.myObjectWithTitle = {title: 'hello from object that was first null'}
    }, 2000)
  }

  public sayHello() {
    return 'hello from class instance';
  }

  public colorCreator() {
    return 'red';
  }

  public onButtonClicked(event: MouseEvent) {
    alert('hello');
  }

  public calculatedMessage() {
    return 'from function';
  }

  public printIsVisible(isVisible: boolean, childComponent: any, stamDom: HTMLHeadingElement) {
    console.log(`The current visibility is: ${isVisible}`);
  }
}
