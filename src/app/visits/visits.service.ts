import { Injectable } from '@angular/core';
import { GlobalService } from '../core/global.service';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  constructor(private global: GlobalService) { }

  getVisits() {
    return this.global.get('/visits', true);
  }
}
