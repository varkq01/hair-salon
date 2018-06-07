import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ServicesService } from '../services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hairdressing',
  templateUrl: './hairdressing.component.html',
  styleUrls: ['./hairdressing.component.scss']
})
export class HairdressingComponent implements OnInit, OnDestroy {
  public femaleServices = [];
  public maleServices = [];

  public isLoading = false;
  private dataStream: Subscription;

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.dataStream = this.servicesService.getAllServices().subscribe(
      (response: any) => {
        const services = response.categories.filter(c => c.type === 'hair');

        this.femaleServices = this.servicesService.getGenderServices('female', services);
        this.maleServices = this.servicesService.getGenderServices('male', services);

        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    );
  }



  ngOnDestroy(): void {
    this.dataStream.unsubscribe();
  }
}
