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
  selectedServices = [];
  @Output() nextClick = new EventEmitter();

  @Input() femaleCategories;
  @Input() maleCategories;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onAdd(service) {
    service.selected = true;
    this.selectedServices.push(service);
  }

  onDelete(service) {
    const idx = this.selectedServices.indexOf(service);
    service.selected = false;
    this.selectedServices.splice(idx, 1);
  }

  checkIfDisabled(gender): boolean {
    return this.selectedServices.filter(s => s.type !== gender).length > 0;
  }

  onNext() {
    this.nextClick.next();
  }
}
