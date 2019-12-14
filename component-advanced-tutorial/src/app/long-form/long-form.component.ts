import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';


class User {
  public firstName = '';
  public lastName = '';
}

@Component({
  selector: 'app-long-form',
  templateUrl: './long-form.component.html',
  styleUrls: ['./long-form.component.scss']
})
export class LongFormComponent {
  @ViewChild('formControl') formControlTemplate: TemplateRef<any>;
  @ViewChild('newInputElements', {read: ViewContainerRef}) inputPlaceholder: ViewContainerRef;
  user: User = new User();
  firstName2 = '';
  createElementLabel = '';

  constructor() { }


  public createNewInput() {
    this.inputPlaceholder.createEmbeddedView(this.formControlTemplate, {labelForInput: this.createElementLabel});
  }

}
