import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VisitsService } from '../visits.service';
import { SessionService } from '../../core/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visits-history',
  templateUrl: './visits-history.component.html',
  styleUrls: ['./visits-history.component.scss']
})
export class VisitsHistoryComponent implements OnInit, OnDestroy {
  dataStream: Subscription;
  userChanged: Subscription;
  isLoading = false;

  visits = [];

  constructor(
    private vS: VisitsService,
    private sS: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.dataStream = this.vS.getVisits().subscribe(
      (response: any) => {
        this.visits = response.visits;
      },
      err => console.error(err),
      () => (this.isLoading = false)
    );

    this.userChanged = this.sS.userChanged.subscribe(usr => {
      this.router.navigate(['/home']);
    });
  }

  ngOnDestroy(): void {
    this.dataStream.unsubscribe();
    this.userChanged.unsubscribe();
  }

  getDate(date: string): Date {
    return new Date(date);
  }
}
