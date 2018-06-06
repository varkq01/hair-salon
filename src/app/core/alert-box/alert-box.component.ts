import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from './alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit, OnDestroy {
  alertsSub: Subscription;
  alerts = [];
  constructor(private alertS: AlertService) {}

  ngOnInit() {
    this.alertsSub = this.alertS.alertAdded.subscribe(alert => {
      if (this.alerts.length === 3) {
        this.alerts.shift();
      }
      this.alerts.push(alert);

      setTimeout(() => this.closeAlert(alert), 10000);
    });
  }

  ngOnDestroy(): void {
    this.alertsSub.unsubscribe();
  }

  closeAlert(alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
