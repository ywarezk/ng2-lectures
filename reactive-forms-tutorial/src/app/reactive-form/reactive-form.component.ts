import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  Validator,
  ValidatorFn,
  Validators,
  AsyncValidatorFn,
  ValidationErrors,
  FormGroup,
  FormBuilder,
  FormArray} from '@angular/forms';
import 'rxjs/add/operator/delay';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { of } from 'rxjs/observable/of';

const nerdeezValidator: ValidatorFn = function(c: AbstractControl) {
  if (c.value === 'nerdeez') {
    return null;
  }
  return {
    'NOT_NERDEEZ': 'the string is not nerdeez'
  };
}

const asyncEmailValidator: AsyncValidatorFn = function(c: AbstractControl): Observable<ValidationErrors> | null {
  if (c.value !== 'yariv@nerdeez.com') {
    return of({
      'NOT_VALID_MAIL': 'you have to enter yariv@nerdeez.com'
    }).delay(500);
  }
  return null;
}

const repeatPassword: ValidatorFn = function(c: AbstractControl): ValidationErrors | null {
  const password: FormControl = c.get('password') as FormControl;
  const repeat: FormControl = c.get('repeatPassword') as FormControl;
  if (password.value !== repeat.value) {
    return {
      'NO_MATCH': 'the passwords dont match'
    };
  }
  return null;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public username: FormControl = new FormControl('Initial Value', [Validators.required], asyncEmailValidator);

  public passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  }, repeatPassword);


  public petsForm: FormGroup = new FormGroup({
    petNames: new FormArray([
      new FormControl()
    ])
  });

  public combinedFroms: FormGroup;



  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    setTimeout(() => {
      this.username.setValue('changed the value');
    }, 1000);

    this.username.valueChanges.subscribe((value) => {
      console.log(`the value changed: ${value}`);
      console.log(`the state is: ${this.username.status}`);
    });

    this.combinedFroms = this._fb.group({
      username: '',
      passwordRepeat: this._fb.group({
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required]
      }, {validator: repeatPassword}),
      pets: this._fb.array([''])
    });
  }

  public addPet() {
    const petNames: FormArray = this.petsForm.get('petNames') as FormArray;
    petNames.push(new FormControl('', Validators.required));
  }

}
