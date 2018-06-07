import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-select-list',
  templateUrl: './employee-select-list.component.html',
  styleUrls: ['./employee-select-list.component.scss']
})
export class EmployeeSelectListComponent implements OnInit {
  @Input() employees = [];

  @Output() selectedEmpl = new EventEmitter();
  @Output() nextClick = new EventEmitter();
  @Output() backClick = new EventEmitter();

  isSelected = false;

  constructor() {}

  ngOnInit() {}

  onAdd(employee) {
    this.employees.forEach(e => (e.selected = false));
    employee.selected = true;
    this.isSelected = true;
    this.selectedEmpl.next(employee);
  }

  onNext() {
    this.nextClick.next();
  }

  onBack() {
    this.backClick.next();
  }
}
