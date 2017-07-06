import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    <button (click)="onClicked()">
      Click Me!
    </button>
  `,
  styles: []
})
export class EventbindingComponent {
  @Output('clickable') clicked = new EventEmitter<string>();

  onClicked() {
    this.clicked.emit('It really works');
  }
}
