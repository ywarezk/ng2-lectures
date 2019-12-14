import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'nz-search',
  template: `
    <form>
      <input type="text" (input)="searchChanged($event)" />
      <input type="text" [(ngModel)]="stamProperty" name="stam" />
    </form>
  `
})
export class SearchComponent {
  public stamProperty: string;

  constructor(private _router: Router) {}

  public searchChanged(event: any) {
    const searchText: string = event.target.value;
    this._router.navigateByUrl(`/tasks?search=${searchText}`);
  }

  public searchChanged1() {

  }
}
