import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { VisitsService } from 'src/app/visits/visits.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';
import { AlertService } from '../../core/alert-box/alert.service';
import { CancelVisitModalComponent } from '../cancel-visit-modal/cancel-visit-modal.component';

@Component({
  selector: 'app-all-visits',
  templateUrl: './all-visits.component.html',
  styleUrls: ['./all-visits.component.scss']
})
export class AllVisitsComponent implements OnInit, OnDestroy {
  dataStream: Subscription;
  isLoading = false;
  modal: NgbModalRef;

  visits = [];

  constructor(
    private vS: VisitsService,
    private mS: NgbModal,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getVisits();
  }

  getVisits() {
    this.isLoading = true;
    this.dataStream = this.vS.getAllVisits().subscribe(
      (response: any) => {
        this.visits = response.visits;
      },
      err => console.error(err),
      () => (this.isLoading = false)
    );
  }

  onCancel(id) {
    this.modal = this.mS.open(CancelVisitModalComponent, { centered: true });

    this.modal.result.then(
      result => {
        if (result.status === 'ok') {
          this.cancelVisit(id, result.reason);
        }
      },
      err => {}
    );
  }

  cancelVisit(id: string, reason: string) {
    this.vS.cancelVisit(id, reason).subscribe((response: any) => {
      this.alertService.addSuccessAlert('Wizyta została odwołana!');
      this.getVisits();
    }, err => {
      this.alertService.addDangerAlert('Wystąpił błąd podczas anulowania wizyty.');
    });
  }

  canBeCanceled(visit) {
    const now = new Date();
    return !visit.isCancelled && this.getDate(visit.date).getTime() > now.getTime();
  }

  ngOnDestroy(): void {
    this.dataStream.unsubscribe();
  }

  getDate(date: string): Date {
    return new Date(date);
  }

}
