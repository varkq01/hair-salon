import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private openedModals: Array<{name: string, modalRef: BsModalRef}> = [];

  private loginModal: BsModalRef;

  constructor(private bsModalService: BsModalService) {}

  public open(
    name: string,
    modalTmlp: any,
    config?: ModalOptions
  ): BsModalRef {
    const modal = this.bsModalService.show(modalTmlp, config);
    this.openedModals.push({name, modalRef: modal});

    return modal;
  }

  public hideByName(name: string): void {
    const idx = this.openedModals.findIndex(m => m.name === name);
    if (idx > -1) {
      this.openedModals[idx].modalRef.hide();
      this.openedModals.splice(idx, 1);
    }
  }

  public hide(modal: BsModalRef): void {
    const idx = this.openedModals.findIndex(m => m.modalRef === modal);
    if (idx > -1) {
      modal.hide();
      this.openedModals.splice(idx, 1);
    }
  }
}
