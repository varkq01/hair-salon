import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbTabChangeEvent, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ServicesService } from '../../services/services.service';
import { EmployeeService } from '../../employee/employee.service';

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

  @ViewChild('tabSet') tabSet: NgbTabset;

  constructor(
    private servicesService: ServicesService,
    private es: EmployeeService
  ) {}

  ngOnInit() {
    this.getServices();
    this.getEmployees();
  }

  ngOnDestroy(): void {
    this.employeesStream.unsubscribe();
    this.servicesStream.unsubscribe();
  }

  public beforeChange($event: NgbTabChangeEvent) {
    // $event.preventDefault();
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
    console.log(this.selectedEmployee);
  }

  onTabChange(tab) {
    this.tabSet.select(tab);
  }
}
