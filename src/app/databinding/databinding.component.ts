import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    stringInterpolation = 'This is string interpolation !!';
    numberInterpolation = 10;

    onSet() {
        return true;
    }

  onClicked(value: string) {
    alert('hey it is working !');
  }
}
