import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<span class="fa fa-circle-o-notch fa-spin" [ngClass]="size" aria-hidden="true"></span>`,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input()
  size = 'small';
}
