import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../../../employee/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public dataStream: Subscription;

  public employees = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.isLoading = true;
    this.dataStream = this.employeeService.getEmployees().subscribe(
      (response: any) => {
        this.employees = response.employees;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.dataStream.unsubscribe();
  }
}
