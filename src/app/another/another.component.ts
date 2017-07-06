import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
  <article>
        Another component
        <div>Hello World !!</div>
        <ng-content></ng-content>
  </article>
  `,
  styles: [`
  article {
    border : 1px solid black;
  }
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
