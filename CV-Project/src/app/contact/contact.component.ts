import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm(){
    console.log(`my name is ${this.name}, my email is ${this.email} and my text is ${this.message}`);
  }

}
