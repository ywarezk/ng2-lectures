import {TestBed} from '@angular/core/testing';
import {ListPageComponent} from './list-page.component';
import {SearchComponent} from '../search/search.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


describe('ListPageComponent', () => {
  const httpMock = {
    get: function<T>(url: string): Observable<T> {
      if (url.indexOf('https://nztodo.herokuapp.com/api/task/?format=json')) {
        return Observable.of({
          {title: '1', description: '1', id: 1},
          {title: '2', description: '2', id: 2},
          {title: '3', description: '3', id: 3},
        })
      }
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPageComponent, SearchComponent],
      providers: [{
        provide: HttpClient, useValue: httpMock
      }]
    })
  })
});
