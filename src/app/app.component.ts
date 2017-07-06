import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-other></app-other>
  <app-another>
    <div>Content added</div>
  </app-another>
  <app-databinding></app-databinding>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue" >
      <p>{{test}}</p>
    </app-lifecycle>
    <button (click)="delete = true">Click to delete !!</button>
    <button (click)="test = 'Changed Value'">Click to update !!</button>
  <button (click)="boundValue = 2000">Click to change binding !!</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  delete = false;
  test = 'Starting value..';
  boundValue = 1000;
}
