import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  public source: string;
  public description: string;

  constructor() {}

  ngOnInit() {}
}
