import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../../shared/confirmation-modal/confirmation-modal.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';
import { AlertService } from '../../core/alert-box/alert.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  private modal: NgbModalRef;
  emplStream: Subscription;
  employees = [];
  public isLoading = false;

  constructor(
    private mS: NgbModal,
    private eS: EmployeeService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  ngOnDestroy(): void {
    this.emplStream.unsubscribe();
  }

  getEmployees() {
    this.isLoading = true;
    this.emplStream = this.eS.getEmployees().subscribe(
      (response: any) => {
        this.employees = response.employees;
      },
      err => {},
      () => (this.isLoading = false)
    );
  }

  onEdit(empl) {
    this.modal = this.mS.open(AddEmployeeComponent, {
      centered: true
    });
    this.modal.componentInstance.title = 'Edycja pracownika';
    this.modal.componentInstance.label = 'Zapisz zmiany';
    this.modal.componentInstance.employee = empl;
    this.modal.result.then(
      result => {
        if (result.status === 'ok') {
          this.updateEmployee(empl._id, result.employee);
        }
      },
      err => {}
    );
  }

  onAdd() {
    this.modal = this.mS.open(AddEmployeeComponent, {
      centered: true
    });
    this.modal.componentInstance.title = 'Dodawanie pracownika';
    this.modal.componentInstance.label = 'Dodaj pracownika';

    this.modal.result.then(
      result => {
        if (result.status === 'ok') {
          this.saveEmployee(result.employee);
        }
      },
      err => {}
    );
  }

  saveEmployee(empl) {
    this.eS.add(empl).subscribe(
      res => {
        this.alertService.addSuccessAlert('Dodano nowego pracownika!');
        this.getEmployees();
      },
      err => {
        this.alertService.addWarningAlert(
          'Wystąpił błąd, zmień dane i spróbuj ponownie.'
        );
      }
    );
  }

  updateEmployee(id, empl) {
    this.eS.update(id, empl).subscribe(
      res => {
        this.alertService.addSuccessAlert('Zmiany zapisano pomyślnie!');
        this.getEmployees();
      },
      err => {
        this.alertService.addWarningAlert(
          'Wystąpił błąd, zmień dane i spróbuj ponownie.'
        );
      }
    );
  }

  deleteEmployee(id) {
    this.eS.delete(id).subscribe(
      res => {
        this.alertService.addSuccessAlert('Pracownik został usunięty!');
        this.getEmployees();
      },
      err => {
        this.alertService.addWarningAlert(
          'Wystąpił błąd podczas usuwania pracownika.'
        );
      }
    );
  }

  onDelete(id) {
    this.modal = this.mS.open(ConfirmationModalComponent, { centered: true });
    this.modal.componentInstance.title = 'Usuwanie pracownika';
    this.modal.componentInstance.body =
      'Czy na pewno chcesz usunąć tego pracownika? Ta operacja jest nieodwracalna.';
    this.modal.componentInstance.label = 'Usuń pracownika';
    this.modal.componentInstance.labelClass = 'btn-danger';

    this.modal.result.then(
      result => {
        if (result === 'ok') {
          this.deleteEmployee(id);
        }
      },
      err => {}
    );
  }
}
