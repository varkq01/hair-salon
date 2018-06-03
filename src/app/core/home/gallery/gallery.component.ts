import { Component, OnInit, TemplateRef } from '@angular/core';
import { ImagePreviewComponent } from 'src/app/core/home/gallery/image-preview/image-preview.component';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public images = [
    {
      source: '/assets/images/work1.jpg',
      description: 'Zdjęcie przedstawia nowa fryzurę klientki'
    },
    {
      source: '/assets/images/work2.jpg',
      description: 'Zdjęcie przedstawia nowa fryzurę klientki'
    },
    {
      source: '/assets/images/work3.jpg',
      description: 'Zdjęcie przedstawia nowa fryzurę klientki'
    },
    {
      source: '/assets/images/work4.jpg',
      description: 'Zdjęcie przedstawia nowa fryzurę klientki'
    },
    {
      source: '/assets/images/work5.jpg',
      description: 'Zdjęcie przedstawia nowa fryzurę klientki'
    },
    {
      source: '/assets/images/work6.jpg',
      description: 'Zdjęcie przedstawia nowa fryzurę klientki'
    }
  ];

  modalRef: NgbModalRef;
  constructor(private modalService: NgbModal) {}

  showImagePreview(image: { source: string; description: string }) {
    const initialState = {
      source: image.source,
      description: image.description
    };

    this.modalRef = this.modalService.open(ImagePreviewComponent, {
      windowClass: 'modal-image',
      size: 'lg',
      centered: true
    });

    this.modalRef.componentInstance.source = image.source;
    this.modalRef.componentInstance.description = image.description;
  }
}
