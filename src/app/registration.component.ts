import { Component } from '@angular/core';
import {Person} from './person';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'registration-component',
  templateUrl: './views/registration.component.html',
  styleUrls: ['./app.component.css']

})
export class registrationcomponent {

  persons: Person[] = [];
  counter = 0;
  person: Person;
  

  registrationForm : FormGroup;
  
  
    constructor(fb: FormBuilder, private router:Router){
      this.registrationForm = fb.group({
        'fname':  [null, Validators.required],
       'lname': [null, Validators.required],
       'email':  [null, Validators.required],
        'pwd':  [null, Validators.required],
       'repwd': [null, Validators.required],
      
      })
    }

   

  onSubmit(value:any) { 
    
    /* this.person = new Person(value.fname,value.lname,value.email, value.pwd,value.repwd);
    if(value) {
      this.persons.push(this.person);
    } */
   // console.log(this.person);
  /*   this.counter++; */
    this.router.navigate(['/login']);
  }
}

