import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../alert-box/alert.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  public form: FormGroup;
  public isResetting = false;

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private alertService: AlertService,
    private sessionService: SessionService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  get email() {
    return this.form.get('email');
  }

  createForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    });
  }

  onClose() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    this.isResetting = true;

    this.sessionService.resetPassword(this.form.value['email']).subscribe(
      (response: any) => {
        this.isResetting = false;
        this.alertService.addSuccessAlert('Hasło zresetowano pomyślnie! Za chwilę otrzymasz maila z nowym hasłem.');
        this.activeModal.close('ok');
      },
      err => {
        this.isResetting = false;
        console.error('Error during resetting pass');
      }
    );
  }
}
