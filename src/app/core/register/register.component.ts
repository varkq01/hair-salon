import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private modalService: ModalService) {}


  ngOnInit() {
  }

  onClose() {
    this.modalService.hideByName('registerModal');
  }
}
