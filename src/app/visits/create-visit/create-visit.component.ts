import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {
  NgbTabChangeEvent,
  NgbTabset,
  NgbModal,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ServicesService } from '../../services/services.service';
import { EmployeeService } from '../../employee/employee.service';
import { VisitsService } from '../visits.service';
import { AppointmentDateComponent } from './appointment-date/appointment-date.component';
import { GlobalService } from '../../core/global.service';
import { ModalService } from '../../core/modal.service';
import { LoginComponent } from 'src/app/core/login/login.component';
import { ConfirmationModalComponent } from '../../shared/confirmation-modal/confirmation-modal.component';
import { AlertService } from '../../core/alert-box/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.scss']
})
export class CreateVisitComponent implements OnInit, OnDestroy {
  employeesStream: Subscription;
  servicesStream: Subscription;

  femaleServices = [];
  maleServices = [];
  employees = [];
  selectedEmployee;
  selectedServices = [];
  selectedDate;
  days = [];

  private loginModal: NgbModalRef;
  private confirmationModal: NgbModalRef;

  @ViewChild('tabSet') tabSet: NgbTabset;

  constructor(
    private servicesService: ServicesService,
    private es: EmployeeService,
    private vS: VisitsService,
    private global: GlobalService,
    private mS: NgbModal,
    private aS: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getServices();
    this.getEmployees();
  }

  ngOnDestroy(): void {
    this.employeesStream.unsubscribe();
    this.servicesStream.unsubscribe();
  }

  getServices() {
    this.servicesStream = this.servicesService
      .getAllServices()
      .subscribe((response: any) => {
        const services = response.categories;
        this.femaleServices = this.servicesService.getGenderServices(
          'female',
          services
        );
        this.maleServices = this.servicesService.getGenderServices(
          'male',
          services
        );
      });
  }

  onSelectedServices(services) {
    this.selectedServices = [...services];
  }

  onSelectedDate(date) {
    this.selectedDate = date;
  }

  getEmployees() {
    this.employeesStream = this.es.getEmployees().subscribe(
      (response: any) => {
        this.employees = response.employees;
      },
      err => {}
    );
  }

  onEmployeeSelect(empl) {
    this.selectedEmployee = empl;
  }

  onTabChange(tab) {
    this.tabSet.select(tab);
  }

  onSubmit() {
    if (!this.global.isAuthenticated()) {
      return this.showLoginModal();
    }

    this.showConfirmationModal();
  }

  showLoginModal() {
    this.loginModal = this.mS.open(LoginComponent, {
      centered: true
    });

    this.loginModal.result.then(
      result => {
        if (result === 'ok') {
          this.showConfirmationModal();
        }
      },
      result => {}
    );
  }

  showConfirmationModal() {
    this.confirmationModal = this.mS.open(ConfirmationModalComponent, {
      centered: true
    });

    this.confirmationModal.result.then(
      result => {
        if (result === 'ok') {
          this.saveAppointment();
        }
      },
      result => {}
    );
  }

  saveAppointment() {
    this.vS.saveVisit(this.selectedDate, this.selectedEmployee, this.selectedServices)
    .subscribe((response: any) => {
      this.aS.addSuccessAlert('Twoja wizyta została zarejestrowana pomyślnie!');
    }, err => {
      this.aS.addDangerAlert('Wystąpił błąd podczas rejestrowania wizyty.');
    }, () => {
      this.router.navigate(['home']);
    });
  }
}
