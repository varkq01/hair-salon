import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() source: string;
  @Input() description: string;

  @Output() onImgClick = new EventEmitter<{ source: string, description: string }>();
  constructor() { }

  onClick() {
    this.onImgClick.next({source: this.source, description: this.description});
  }
}
