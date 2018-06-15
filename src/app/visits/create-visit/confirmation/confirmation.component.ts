import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  IterableDiffers
} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  servicesArr = [];
  // total = 0;
  @Input() employee;
  @Input()
  set services(val) {
    if (val) {
      this.servicesArr = val;
    }
  }
  @Input() date;

  @Output() backClick = new EventEmitter();
  @Output() submit = new EventEmitter();
  constructor() {
  }

  ngOnInit() {}


  get total() {
    let sum = 0;
    this.servicesArr.forEach(s => (sum += s.price));
    return sum;
  }

  onSubmit() {
    this.submit.next();
  }

  onBack() {
    this.backClick.next();
  }
}
