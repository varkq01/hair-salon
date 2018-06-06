import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../session.service';
import { GlobalService } from '../global.service';
import { AlertService } from '../alert-box/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  isRegistering = false;
  public error: string;

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

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  createForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required)
    });
  }

  onClose() {
    this.activeModal.dismiss();
  }

  onRegister() {
    this.isRegistering = true;

    this.sessionService.register(this.form.value).subscribe(
      (response: any) => {
        sessionStorage.setItem('x-auth', response.headers.get('x-auth'));
        this.global.setUser(response.body);
        this.isRegistering = false;
        this.sessionService.userChanged.next();
        this.alertService.addSuccessAlert('Konto stworzone pomyślnie!');
        this.activeModal.close('ok');
      },
      err => {
        this.error = err.message;
        this.isRegistering = false;
      }
    );
  }
}
