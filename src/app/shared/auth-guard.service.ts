import { Injectable } from '@angular/core';
import { GlobalService } from '../core/global.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {
  constructor(public global: GlobalService, public router: Router) {}

  canActivate(): boolean {
    if (!this.global.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
