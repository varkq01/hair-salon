import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../alert-box/alert.service';
import { GlobalService } from 'src/app/core/global.service';
import { SessionService } from 'src/app/core/session.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  isHidden = true;
  form: FormGroup;
  isResetting = false;
  error: string;
  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private sessionService: SessionService,
    private global: GlobalService,
    private alertService: AlertService
  ) {
    this.createForm();
  }



  get newPassword() {
    return this.form.get('newPassword');
  }

  get currentPassword() {
    return this.form.get('currentPassword');
  }

  onShowPassword() {
    this.isHidden = !this.isHidden;

    setTimeout(() => {
      this.isHidden = true;
    }, 2000);
  }


  createForm() {
    this.form = this.fb.group({
      newPassword: this.fb.control('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      currentPassword: this.fb.control('', Validators.required),
    });
  }

  onClose() {
    this.activeModal.dismiss();
  }

  onRegister() {
    this.isResetting = true;

    this.sessionService.changePassword(this.form.value).subscribe(
      (response: any) => {
        this.isResetting = false;
        this.alertService.addSuccessAlert('Hasło zostało zmienione pomyślnie!');
        this.activeModal.close('ok');
      },
      err => {
        this.error = err.message;
        this.isResetting = false;
      }
    );
  }
}
