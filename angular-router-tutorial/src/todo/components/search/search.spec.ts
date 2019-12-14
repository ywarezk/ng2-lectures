
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import getPrototypeOf = Reflect.getPrototypeOf;
import {FormsModule} from '@angular/forms';

describe('SearchComponent', () => {
  let searchFixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule.withRoutes([{
        path: '**',
        component: SearchComponent
      }]), FormsModule]
    });
    TestBed.compileComponents();
  }));

  beforeEach(async(() => {
    searchFixture = TestBed.createComponent(SearchComponent);
    searchFixture.detectChanges();
  }));

  it('should call the change event', () => {
    spyOn(searchFixture.componentInstance, 'searchChanged');
    const textInput: DebugElement = searchFixture.debugElement.query(By.css('input'));
    textInput.nativeElement.value = 'test';
    textInput.nativeElement.dispatchEvent(new Event('input'));
    console.log('2');
    searchFixture.detectChanges();
    //expect(searchFixture.componentInstance._searchString).toBe('test');
    expect(searchFixture.componentInstance.searchChanged).toHaveBeenCalled();

  });

  it('should update the value', /*async(*/() => {
    const textInput: DebugElement = searchFixture.debugElement.query(By.css('input[name="stam"]'));
    textInput.nativeElement.value = 'test';
    textInput.nativeElement.dispatchEvent(new Event('input'));
    console.log('2');
    searchFixture.detectChanges();
    // tick();
    expect(searchFixture.componentInstance.stamProperty).toBe('test');
  })/*)*/;


});
