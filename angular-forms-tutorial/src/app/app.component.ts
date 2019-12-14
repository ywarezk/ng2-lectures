import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public username: string = 'initial username';
  @ViewChild('usernameNgModel') public usernameNgModel: NgModel;
  @ViewChild(NgForm) public formDirective: NgForm;

  public set setterDate(value: string) {
  }

  public set setterFile(value) {
    debugger;
  }

  public ngOnInit() {
  }

  public ngAfterViewInit(): void {
  }
}
