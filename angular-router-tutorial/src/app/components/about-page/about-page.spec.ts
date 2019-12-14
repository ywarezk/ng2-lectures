import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AboutPageComponent} from './about-page.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('AboutPageComponent', () => {
  let aboutPageComponentFixture: ComponentFixture<AboutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPageComponent]
    });
  });

  beforeEach(() => {
    aboutPageComponentFixture = TestBed.createComponent(AboutPageComponent);
    aboutPageComponentFixture.detectChanges();
  });

  it('should contain h1 test with about page', () => {
    const h1DebugElement: DebugElement = aboutPageComponentFixture.debugElement.query(By.css('h1'));
    expect(h1DebugElement.nativeElement.innerText).toBe('About page');
  });
});
