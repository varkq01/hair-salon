import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../global.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;
  modalRef: NgbModalRef;
  public user;

  constructor(
    private modalService: NgbModal,
    public global: GlobalService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  onLogin() {
    this.modalRef = this.modalService.open(LoginComponent, {
      centered: true
    });

    this.modalRef.result
      .then(result => {
        this.checkIfLoggedIn();
      })
      .catch(reason => console.log(reason));
  }

  onLogout() {
    this.sessionService.logout().subscribe(resp => {
      this.isLoggedIn = false;

      // todo emit event that user has been logged out
    });
  }

  checkIfLoggedIn() {
    this.user = this.global.getUser();
    const token = this.global.getAuthToken();
    if (this.user && token) {
      this.isLoggedIn = true;
    }
  }
}
