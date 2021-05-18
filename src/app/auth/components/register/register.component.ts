import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {registerAction } from '../../store/actions';


@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store : Store,
  ) { }

  ngOnInit(): void {
    this.initializeForm()
  }
  
  
  
  initializeForm(): void {
    
    this.form = this.formBuilder.group({
      userName : ['',Validators.required],
      email : ['',Validators.required, Validators.email ],
      password: ['',Validators.required]
    })
  }


  onSubmit(){
console.log(this.form.getRawValue(), this.form.valid)
this.store.dispatch(registerAction(this.form.value))
  }
}
