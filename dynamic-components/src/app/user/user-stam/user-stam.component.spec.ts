import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStamComponent } from './user-stam.component';

describe('UserStamComponent', () => {
  let component: UserStamComponent;
  let fixture: ComponentFixture<UserStamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
