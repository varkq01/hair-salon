import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesService } from '../services.service';
import { Subscription } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../../core/alert-box/alert.service';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';
import { AddServiceComponent } from '../add-service/add-service.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit, OnDestroy {
  maleServices = [];
  femaleServices = [];
  isLoading = false;
  modal: NgbModalRef;

  servicesStream: Subscription;

  constructor(
    private sS: ServicesService,
    private mS: NgbModal,
    private alertService: AlertService) {}

  ngOnInit() {
    this.getServices();
  }

  ngOnDestroy(): void {
    this.servicesStream.unsubscribe();
  }

  getServices() {
    this.isLoading = true;
    this.servicesStream = this.sS.getAllServices().subscribe(
      (response: any) => {
        const services = response.categories;
        this.femaleServices = this.sS.getGenderServices('female', services);
        this.maleServices = this.sS.getGenderServices('male', services);
      },
      err => {},
      () => (this.isLoading = false)
    );
  }

  onEdit(service) {
    this.modal = this.mS.open(AddServiceComponent, { size: 'lg', centered: true });
    this.modal.componentInstance.title = 'Edycja kategorii';
    this.modal.componentInstance.label = 'Zapisz zmiany';
    this.modal.componentInstance.service = service;
    this.modal.result.then(
      result => {
        if (result.status === 'ok') {
          this.updateCategory(service._id, result.service);
        }
      },
      err => {}
    );
  }

  onAdd() {
    this.modal = this.mS.open(AddServiceComponent, { size: 'lg', centered: true });
    this.modal.componentInstance.title = 'Dodawanie kategorii';
    this.modal.componentInstance.label = 'Dodaj kategorie';

    this.modal.result.then(
      result => {
        if (result.status === 'ok') {
          this.saveCategory(result.service);
        }
      },
      err => {}
    );
  }

  saveCategory(service) {
    this.sS.addService(service).subscribe(
      res => {
        this.alertService.addSuccessAlert('Dodano nowegą kategorię!');
        this.getServices();
      },
      err => {
        this.alertService.addWarningAlert(
          'Wystąpił błąd, zmień dane i spróbuj ponownie.'
        );
      }
    );
  }

  updateCategory(id, service) {
    this.sS.updateService(id, service).subscribe(
      res => {
        this.alertService.addSuccessAlert('Zmiany zapisano pomyślnie!');
        this.getServices();
      },
      err => {
        this.alertService.addWarningAlert(
          'Wystąpił błąd, zmień dane i spróbuj ponownie.'
        );
      }
    );
  }

  deleteCategory(id) {
    this.sS.deleteService(id).subscribe(
      res => {
        this.alertService.addSuccessAlert('Kategoria została usunięta!');
        this.getServices();
      },
      err => {
        this.alertService.addWarningAlert(
          'Wystąpił błąd podczas usuwania kategorii.'
        );
      }
    );
  }

  onDelete(id) {
    this.modal = this.mS.open(ConfirmationModalComponent, { centered: true });
    this.modal.componentInstance.title = 'Usuwanie pracownika';
    this.modal.componentInstance.body =
      'Czy na pewno chcesz usunąć tą kategorie? Ta operacja jest nieodwracalna.';
    this.modal.componentInstance.label = 'Usuń kategorie';
    this.modal.componentInstance.labelClass = 'btn-danger';

    this.modal.result.then(
      result => {
        if (result === 'ok') {
          this.deleteCategory(id);
        }
      },
      err => {}
    );
  }
}
