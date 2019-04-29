import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactMethods=[
    {id:1,name:'email'},
    {id:2,name:'phone'}
  ];

  showModel(model){
    console.log(model);
  }

  submit(f){
    console.log(f);
  }

  showModelGroup(contact){
    console.log(contact);
  }
}
