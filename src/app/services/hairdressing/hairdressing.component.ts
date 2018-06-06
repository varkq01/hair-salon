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
    this.dataStream = this.servicesService.getHairdressingServices().subscribe(
      (response: any) => {
        const services = response.categories.filter(c => c.type === 'hair');

        this.femaleServices = this.getGenderServices('female', services);
        this.maleServices = this.getGenderServices('male', services);

        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    );
  }

  getGenderServices(gender: string, services): Array<any> {
    const gServices = [];
    services.forEach(c => {
      const category: any = {};
      (category.name = c.name),
        (category.type = c.type),
        (category.services = c.services.filter(s => s.type === gender));
      if (category.services.length > 0) {
        gServices.push(category);
      }
    });

    return gServices;
  }

  ngOnDestroy(): void {
    this.dataStream.unsubscribe();
  }
}
