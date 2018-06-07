import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/core/global.service';
import { Subject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SessionService {
  public userChanged = new Subject<any>();

  constructor(private global: GlobalService) {}

  login(email: string, password: string) {
    return this.global.post('/users/login', { email, password }, true, {
      observe: 'response'
    });
  }

  logout() {
    return this.global.delete('/users/logout').pipe(
      response => {
        this.global.clearSession();
        return response;
      },
      catchError(err => {
        this.global.clearSession();
        return Observable.throw(err);
      })
    );
  }

  register(user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return this.global.post('/users', user, true, { observe: 'response' });
  }

  resetPassword(email: string) {
    return this.global.post('/users/reset', { email });
  }
}
