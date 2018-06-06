import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesService } from '../services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cosmetic',
  templateUrl: './cosmetic.component.html',
  styleUrls: ['./cosmetic.component.scss']
})
export class CosmeticComponent implements OnInit, OnDestroy {
  public services = [];
  public isLoading = false;
  private dataStream: Subscription;

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.dataStream = this.servicesService
      .getHairdressingServices()
      .subscribe((response: any) => {
        this.services = response.categories.filter(c => c.type === 'body');
        this.isLoading = false;
      }, err => (this.isLoading = false));
  }

  ngOnDestroy(): void {
    this.dataStream.unsubscribe();
  }
}
