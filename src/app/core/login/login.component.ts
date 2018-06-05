import { Component } from '@angular/core';
import { PasswordResetComponent } from '../password-reset/password-reset.component';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  submitted = false;
  isLogging = false;
  loginError: string;

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private sessionService: SessionService,
    private fb: FormBuilder,
    private global: GlobalService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

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
    this.submitted = true;
    this.isLogging = true;
    if (this.form.invalid) {
      return;
    }

    const email = this.form.value['email'];
    const password = this.form.value['password'];

    this.sessionService.login(email, password).subscribe(
      (response: any) => {
        sessionStorage.setItem('x-auth', response.headers.get('x-auth'));
        this.global.setUser(email, response.body._id);
        this.activeModal.close('ok');
      },
      err => {
        this.loginError = err.error.message;
      }, () => this.isLogging = false
    );
  }

  onRegister() {
    this.activeModal.dismiss();

    this.modalService.open(RegisterComponent, {
      centered: true
    });
  }
}
