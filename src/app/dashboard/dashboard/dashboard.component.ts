import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../core/session.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userChanged: Subscription;

  constructor(private sS: SessionService, private router: Router) {
    this.userChanged = this.sS.userChanged.subscribe(usr => {
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {}
}
