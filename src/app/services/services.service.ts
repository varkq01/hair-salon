import { Injectable } from '@angular/core';
import { GlobalService } from '../core/global.service';
import {map, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private global: GlobalService) {}

  getAllServices() {
    return this.global.get('/categories');
  }

  getHairdressingServices() {
    return this.getAllServices();
  }

  getCosmeticServices() {
    return this.getAllServices();
  }
}
