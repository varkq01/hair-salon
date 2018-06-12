import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbTabChangeEvent, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ServicesService } from '../../services/services.service';
import { EmployeeService } from '../../employee/employee.service';
import { VisitsService } from '../visits.service';
import { AppointmentDateComponent } from './appointment-date/appointment-date.component';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.scss']
})
export class CreateVisitComponent implements OnInit, OnDestroy {
  employeesStream: Subscription;
  servicesStream: Subscription;

  femaleServices = [];
  maleServices = [];
  employees = [];
  selectedEmployee;
  selectedServices = [];
  selectedDate;
  days = [];


  @ViewChild('tabSet') tabSet: NgbTabset;
  @ViewChild('dateTab') dateTab: AppointmentDateComponent;

  constructor(
    private servicesService: ServicesService,
    private es: EmployeeService,
    private vS: VisitsService
  ) {}

  ngOnInit() {
    this.getServices();
    this.getEmployees();
  }

  ngOnDestroy(): void {
    this.employeesStream.unsubscribe();
    this.servicesStream.unsubscribe();
  }

  getServices() {
    this.servicesStream = this.servicesService
      .getAllServices()
      .subscribe((response: any) => {
        const services = response.categories;
        this.femaleServices = this.servicesService.getGenderServices(
          'female',
          services
        );
        this.maleServices = this.servicesService.getGenderServices(
          'male',
          services
        );
      });
  }

  onSelectedServices(services) {
    this.selectedServices = services;
  }

  onSelectedDate(date) {
    this.selectedDate = date;
    console.log(this.selectedDate);
  }

  getEmployees() {
    this.employeesStream = this.es.getEmployees().subscribe(
      (response: any) => {
        this.employees = response.employees;
      },
      err => {}
    );
  }

  onEmployeeSelect(empl) {
    this.selectedEmployee = empl;
  }

  onTabChange(tab) {
    this.tabSet.select(tab);
  }


}
