import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContactListComponent, SpinnerComponent, ConfirmationModalComponent],
  exports: [CommonModule, ContactListComponent, SpinnerComponent],
  entryComponents: [ConfirmationModalComponent]
})
export class SharedModule {}
