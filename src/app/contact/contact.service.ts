import { Injectable } from '@angular/core';
import { GlobalService } from '../core/global.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private global: GlobalService) { }

  sendMessage(msg: {email: string, firstName: string, lastName: string, message: string}) {
    return this.global.post('/contact', msg);
  }
}
