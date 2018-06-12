import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  form: FormGroup;
  femaleServices = [];
  maleServices = [];
  checkedServices = [];
  @Output() nextClick = new EventEmitter();
  @Output() selectedServices = new EventEmitter();

  @Input() femaleCategories;
  @Input() maleCategories;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onAdd(service) {
    service.selected = true;
    this.checkedServices.push(service);
    this.selectedServices.next(this.checkedServices);
  }

  onDelete(service) {
    const idx = this.checkedServices.indexOf(service);
    service.selected = false;
    this.checkedServices.splice(idx, 1);
    this.selectedServices.next(this.checkedServices);
  }

  checkIfDisabled(gender): boolean {
    return this.checkedServices.filter(s => s.type !== gender).length > 0;
  }

  onNext() {
    this.nextClick.next();
  }
}
