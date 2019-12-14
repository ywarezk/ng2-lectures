import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStamComponent } from './app-stam.component';

describe('AppStamComponent', () => {
  let component: AppStamComponent;
  let fixture: ComponentFixture<AppStamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
