import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal,  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit() {}

  onClose() {
    this.activeModal.dismiss();
  }
}
