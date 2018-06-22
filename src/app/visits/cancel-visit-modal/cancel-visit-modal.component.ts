import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancel-visit-modal',
  templateUrl: './cancel-visit-modal.component.html',
})
export class CancelVisitModalComponent implements OnInit {

  form: FormGroup;


  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder) {
    this.form = this.fb.group({
      reason: this.fb.control('', Validators.required)
    });
  }

  get reason() {
    return this.form.controls['reason'];
  }

  ngOnInit() {}

  onClose() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    this.activeModal.close({status: 'ok', reason: this.form.controls['reason'].value});
  }

}
