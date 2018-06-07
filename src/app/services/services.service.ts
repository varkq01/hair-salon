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

  getGenderServices(gender: string, services): Array<any> {
    const gServices = [];
    services.forEach(c => {
      const category: any = {};
      (category.name = c.name),
        (category.type = c.type),
        (category.services = c.services.filter(s => s.type === gender));
      if (category.services.length > 0) {
        gServices.push(category);
      }
    });

    return gServices;
  }
}
