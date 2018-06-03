import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(private modalService: ModalService) {}


  ngOnInit() {
  }

  onClose() {
    this.modalService.hideByName('passwordModal');
  }
}
