import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/core/global.service';
import { Subject } from 'rxjs';

@Injectable()
export class SessionService {
  public userChanged = new Subject<any>();

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

  register(user: {firstName: string, lastName: string, email: string, password: string}) {
    return this.global.post(
      '/users',
      user,
      { observe: 'response' }
    );
  }
}
