import { Component } from '@angular/core';
import { PasswordResetComponent } from '../password-reset/password-reset.component';
import { RegisterComponent } from '../register/register.component';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) {}
  onReset() {
    this.activeModal.dismiss();

    this.modalService.open(PasswordResetComponent, {
      centered: true
    });
  }

  onClose() {
    this.activeModal.dismiss();
  }

  onLogin() {
    this.activeModal.close('ok');
  }

  onRegister() {
    this.activeModal.dismiss();

    this.modalService.open(RegisterComponent, {
      centered: true
    });
  }
}
