import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonModule,
    AccordionModule
  ]
})
export class SharedModule { }
