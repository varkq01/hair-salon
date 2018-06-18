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

    return services.filter(s => s.type === gender);
  }

  addService(service) {
    return this.global.post('/categories', service, true);
  }


  updateService(id, service) {
    return this.global.put('/categories/' + id, service, true);
  }

  deleteService(id) {
    return this.global.delete('/categories/' + id, true);
  }
}
