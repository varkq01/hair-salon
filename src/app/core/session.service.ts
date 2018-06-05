import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/core/global.service';

@Injectable()
export class SessionService {
  constructor(private global: GlobalService) {}

  login(email: string, password: string) {
    return this.global.post(
      '/users/login',
      { email, password },
      { observe: 'response' }
    );
  }

  logout() {
    return this.global.delete('/users/logout').pipe(response => {
      this.global.clearSession();
      return response;
    });
  }
}
