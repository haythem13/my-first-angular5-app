import { Component, OnInit } from '@angular/core';
import { toASCII } from 'punycode';


@Component({
  selector: 'app-upper-case',
  templateUrl: './upper-case.component.html',
  styleUrls: ['./upper-case.component.css']
})
export class UpperCaseComponent implements OnInit {
  text = '';
 res = '';
  constructor() { }

  ngOnInit() {
  }
  up(c) {
    this.res = '';


    for (let i = 0; i < c.length; i++) {
      const a = c.charCodeAt(i);
        if ((a > 97) && (a < 122)) {
          const b = String.fromCodePoint(a - 32);
          this.res = this.res.concat(b);
        }   else       {
         const b1 = String.fromCharCode(a);
         this.res = this.res.concat(b1);
         console.log(b1);
        }

    }
  }
}
