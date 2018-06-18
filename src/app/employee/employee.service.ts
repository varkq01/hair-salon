import { Injectable } from '@angular/core';
import { GlobalService } from '../core/global.service';

@Injectable()
export class EmployeeService {

  constructor(private global: GlobalService) { }

  getEmployees() {
    return this.global.get('/employees');
  }

  add(employee: {file: string, firstName: string, lastName: string, position: string, description: string}) {
    return this.global.post('/employees', { ...employee }, true);
  }

  update(id, employee: {file: string, firstName: string, lastName: string, position: string, description: string}) {
    return this.global.put('/employees/' + id, { ...employee },  true);
  }

  delete(id) {
    return this.global.delete('/employees/' + id, true);
  }
}
