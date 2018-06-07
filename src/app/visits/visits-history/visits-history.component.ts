import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VisitsService } from '../visits.service';

@Component({
  selector: 'app-visits-history',
  templateUrl: './visits-history.component.html',
  styleUrls: ['./visits-history.component.scss']
})
export class VisitsHistoryComponent implements OnInit, OnDestroy {
  dataStream: Subscription;
  isLoading = false;

  visits = [];

  constructor(private vS: VisitsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.dataStream = this.vS.getVisits().subscribe(
      (response: any) => {
        this.visits = response.visits;
      },
      err => console.error(err),
      () => (this.isLoading = false)
    );
  }

  ngOnDestroy(): void {
    this.dataStream.unsubscribe();
  }

  getDate(date: string): Date {
    return new Date(date);
  }
}
