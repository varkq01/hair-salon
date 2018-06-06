import { Component, OnInit } from '@angular/core';
import { AlertService } from '../core/alert-box/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup;
  isSending = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private alertService: AlertService
  ) {
    this.createForm();
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
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
      message: this.fb.control('', [Validators.required]),
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required)
    });
  }

  onSubmit() {
    this.isSending = true;

    this.contactService.sendMessage(this.form.value).subscribe(
      (response: any) => {
        this.isSending = false;
        this.alertService.addSuccessAlert('Wiadomość została wysłana');
        this.form.reset();
      },
      err => {
        this.isSending = false;
        this.alertService.addDangerAlert('Coś poszło nie tak!');
      }
    );
  }
}
