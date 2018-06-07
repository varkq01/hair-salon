import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-date',
  templateUrl: './appointment-date.component.html',
  styleUrls: ['./appointment-date.component.scss']
})
export class AppointmentDateComponent implements OnInit {
  model: NgbDateStruct;
  @Output() nextClick = new EventEmitter();
  @Output() backClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onNext() {
    this.nextClick.next();
  }

  onBack() {
    this.backClick.next();
  }
}
