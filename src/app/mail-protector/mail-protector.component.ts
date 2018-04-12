import { Component, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mail-protector',
  templateUrl: './mail-protector.component.html',
  styleUrls: ['./mail-protector.component.css']
})
export class MailProtectorComponent implements OnInit {
  fGroup: FormGroup;
  emailCtrl: FormControl;

  constructor( private fBuilder: FormBuilder ) {
    this.fGroup = fBuilder.group({
      UserFName:  ['', Validators.required],
      UserLastName: ['', Validators.required],
      AboutUser: ['', Validators.required],
      email: ['', Validators.email]
    });
  }


  ngOnInit() {
  }

}


