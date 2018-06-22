import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() labelClass: string;
  @Input() label: string;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {}

  onClose() {
    this.activeModal.dismiss();
  }

  onConfirm() {
    this.activeModal.close('ok');
  }
}
