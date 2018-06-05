import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AlertService {
  alertAdded = new Subject<{ message: string; type: string }>();
  constructor() {}

  public addAlert(message: string, type: string) {
    this.alertAdded.next({ message, type });
  }

  addSuccessAlert(message: string) {
    this.alertAdded.next({message, type: 'success'});
  }

  addWarningAlert(message: string) {
    this.alertAdded.next({message, type: 'warning'});
  }

  addDangerAlert(message: string) {
    this.alertAdded.next({message, type: 'danger'});
  }

  addInfoAlert(message: string) {
    this.alertAdded.next({message, type: 'info'});
  }
}
