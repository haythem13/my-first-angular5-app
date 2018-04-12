import { Component, OnInit } from '@angular/core';
import { toASCII } from 'punycode';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = 'h';


  constructor() { }

  ngOnInit() {
  }


  clear() {
    this.name = '';
  }

}
