import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PasswordResetComponent } from '../password-reset/password-reset.component';
import { RegisterComponent } from '../register/register.component';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  passwordModal: BsModalRef;
  registerModal: BsModalRef;

  constructor(private modalService: ModalService) {}

  onReset() {
    this.modalService.hideByName('loginModal');

    this.passwordModal = this.modalService.open(
      'passwordModal',
      PasswordResetComponent,
      {
        class: 'modal-dialog-centered'
      }
    );
  }

  onClose() {
    this.modalService.hideByName('loginModal');
  }

  onRegister() {
    this.modalService.hideByName('loginModal');

    this.registerModal = this.modalService.open(
      'registerModal',
      RegisterComponent,
      {
        class: 'modal-dialog-centered'
      }
    );
  }
}
