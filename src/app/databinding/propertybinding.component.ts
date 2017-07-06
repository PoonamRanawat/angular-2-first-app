import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertybindingComponent {
   @Input() result: number = 0;
}
