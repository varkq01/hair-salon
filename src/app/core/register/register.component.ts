import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit() {}

  onClose() {
    this.activeModal.dismiss();
  }
}
