import { Injectable } from '@angular/core';
import { GlobalService } from '../core/global.service';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {
  constructor(private global: GlobalService) {}

  getVisits() {
    return this.global.get('/visits', true);
  }

  getHours(duration: number, date: string, employeeID) {
    return this.global.post('/visits/hours', { duration, date, employeeID });
  }

  getAllVisits() {
    return this.global.get('/visits/all', true);
  }

  cancelVisit(id: string, reason: string) {
    return this.global.put('/visits/cancel/' + id, { reason }, true);
  }

  saveVisit(
    date: Date,
    empl: { firstName: string; lastName: string; _id: string },
    services: Array<any>
  ) {
    const employee = {
      firstName: empl.firstName,
      lastName: empl.lastName,
      id: empl._id
    };
    const clientMail = this.global.getUser().email;
    return this.global.post('/visits', {
      date,
      employee,
      services,
      clientMail
    });
  }
}
