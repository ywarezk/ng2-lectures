import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {LoginService} from "../login.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const mockHttpClient = {
    post: (url, body, options?) => {
      if (body.password === '12345') {
        return Observable.of({
          jwt: 'hello world'
        })
      } else {
        return Observable.create((observer) => observer.error(new Error()))
      }
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [
        LoginService,
        {provide: HttpClient, useValue: mockHttpClient}
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect component to launch with 2 inputs a button and a form', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(2);
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  it('fill the email fill tha password submit, verify that the login is called with the password and email filled', () => {
    // spy on the login method
    spyOn(component, 'login');

    // fill the email yariv@nerdeez.com
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
    emailInput.nativeElement.value = 'yariv@nerdeez.com';
    emailInput.nativeElement.dispatchEvent(new Event('input'));

    // fill the password
    const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
    passwordInput.nativeElement.value = '12345';
    passwordInput.nativeElement.dispatchEvent(new Event('input'));

    // submit the form
    const form = fixture.debugElement.query(By.css('form'));
    form.nativeElement.dispatchEvent(new Event('submit'));

    expect(component.login).toHaveBeenCalled();
    expect(component.email).toBe('yariv@nerdeez.com');
    expect(component.password).toBe('12345');
  });

  it('server returns good response and bad response', () => {
    // fill the email yariv@nerdeez.com
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
    emailInput.nativeElement.value = 'yariv@nerdeez.com';
    emailInput.nativeElement.dispatchEvent(new Event('input'));

    // fill the password
    const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
    passwordInput.nativeElement.value = '12345';
    passwordInput.nativeElement.dispatchEvent(new Event('input'));

    // submit the form
    const form = fixture.debugElement.query(By.css('form'));
    form.nativeElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    // tick();

    const h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.innerText).toBe('success');

    passwordInput.nativeElement.value = '123456';
    passwordInput.nativeElement.dispatchEvent(new Event('input'));

    // submit the form
    form.nativeElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    // tick();
    expect(h3.nativeElement.innerText).toBe('invalid');

  });
});
