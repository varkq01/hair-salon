import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../global.service';
import { SessionService } from '../session.service';
import { Subscription } from 'rxjs';
import { AlertService } from '../alert-box/alert.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLoggedIn = false;
  public user;
  private modalRef: NgbModalRef;
  private userChanged: Subscription;

  constructor(
    private modalService: NgbModal,
    public globalService: GlobalService,
    private sessionService: SessionService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.checkIfLoggedIn();

    this.userChanged = this.sessionService.userChanged.subscribe(usr => {
      this.checkIfLoggedIn();
    });
  }

  ngOnDestroy(): void {
    this.userChanged.unsubscribe();
  }

  onLogin() {
    this.modalRef = this.modalService.open(LoginComponent, {
      centered: true
    });
  }

  onLogout() {
    this.sessionService.logout().subscribe(resp => {
      this.isLoggedIn = false;
      this.alertService.addSuccessAlert('Wylogowano pomyślnie!');
      this.sessionService.userChanged.next();
    });
  }

  checkIfLoggedIn() {
    this.user = this.globalService.getUser();
    const token = this.globalService.getAuthToken();
    if (this.user && token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  onChangePassword() {
    this.modalRef = this.modalService.open(ChangePasswordComponent, {
      centered: true
    });
  }

  get isAdmin() {
    return this.globalService.isAdmin();
  }
}
