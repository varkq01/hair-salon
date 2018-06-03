import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;
  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onLogin() {
    this.modalRef = this.modalService.open(LoginComponent, {
      centered: true
    });

    this.modalRef.result
      .then(result => {
        this.isLoggedIn = true;
      })
      .catch(reason => console.log(reason));
  }
}
