import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContactListComponent, SpinnerComponent],
  exports: [CommonModule, ContactListComponent, SpinnerComponent]
})
export class SharedModule {}
