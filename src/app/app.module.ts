import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {registrationcomponent} from './registration.component';
import { LoginComponent } from './login.component';

//import {Person} from './person';
@NgModule({
  declarations: [
    AppComponent,
    registrationcomponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
