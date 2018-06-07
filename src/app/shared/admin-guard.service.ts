import { Injectable } from '@angular/core';
import { GlobalService } from '../core/global.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuardService {
  constructor(public global: GlobalService, public router: Router) {}

  canActivate(): boolean {
    if (!this.global.isAdmin()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
