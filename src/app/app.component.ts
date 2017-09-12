import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'myapp';
  newdate = new Date();
  names :string[]= [
    "suvarna","shruti","manoj","madhuri"
  ]
}
