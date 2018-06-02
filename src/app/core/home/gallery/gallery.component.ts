import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ImagePreviewComponent } from 'src/app/core/home/gallery/image-preview/image-preview.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public images = [{
    source: '/assets/images/work1.jpg',
    description: 'Zdjęcie przedstawia nowa fryzurę klientki'
  },{
    source: '/assets/images/work2.jpg',
    description: 'Zdjęcie przedstawia nowa fryzurę klientki'
  },{
    source: '/assets/images/work3.jpg',
    description: 'Zdjęcie przedstawia nowa fryzurę klientki'
  },{
    source: '/assets/images/work4.jpg',
    description: 'Zdjęcie przedstawia nowa fryzurę klientki'
  },{
    source: '/assets/images/work5.jpg',
    description: 'Zdjęcie przedstawia nowa fryzurę klientki'
  },{
    source: '/assets/images/work6.jpg',
    description: 'Zdjęcie przedstawia nowa fryzurę klientki'
  }]

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  showImagePreview(image: {source: string, description: string}) {
    const initialState = {
      source: image.source,
      description: image.description,
    };

    this.modalRef = this.modalService.show(ImagePreviewComponent, {
      initialState, 
      class: 'modal-lg modal-image'
    });
  }
}


