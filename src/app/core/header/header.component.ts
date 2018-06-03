import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ModalService } from '../modal.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;
  modalRef: BsModalRef;

  constructor(
    private modalService: ModalService,
    private bsModal: BsModalService
  ) {}

  ngOnInit() {}

  onLogin() {
    this.modalRef = this.modalService.open('loginModal', LoginComponent, {
      class: 'modal-dialog-centered'
    });
  }
}
