import { Injectable } from '@angular/core';
import { GlobalService } from '../core/global.service';

@Injectable()
export class EmployeeService {

  constructor(private global: GlobalService) { }

  getEmployees() {
    return this.global.get('/employees');
  }

  add(employee: {file: string, firstName: string, lastName: string, position: string, description: string}) {
    return this.global.post('/employees', {...employee}, true);
  }
}
