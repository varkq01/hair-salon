import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContactListComponent],
  exports: [CommonModule, ContactListComponent]
})
export class SharedModule {}
