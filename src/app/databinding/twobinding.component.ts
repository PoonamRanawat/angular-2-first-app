import { Component } from '@angular/core';

@Component({
  selector: 'app-twobinding',
  template: `
   <input type="text" [(ngModel)]="person.name"/> <br>
   <input type="text" [(ngModel)]="person.name"/>
  `
})
export class TwobindingComponent {
  person = {
    name: 'poonam'
  };
}
