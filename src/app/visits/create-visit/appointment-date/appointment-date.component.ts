import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { VisitsService } from 'src/app/visits/visits.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointment-date',
  templateUrl: './appointment-date.component.html',
  styleUrls: ['./appointment-date.component.scss']
})
export class AppointmentDateComponent implements OnInit {
  hoursStream: Subscription;

  model: NgbDateStruct;
  selectedDay;
  selectedHour;

  isGettingHours = false;
  hours = [];
  days = [];

  private empl;
  private services;

  @Output() nextClick = new EventEmitter();
  @Output() backClick = new EventEmitter();
  @Output() hourSelect = new EventEmitter();

  @Input()
  set selectedServices(val: Array<any>) {
    if (val) {
      this.services = val;
      this.getHours();
    }
  }

  @Input()
  set employee(val) {
    if (val) {
      this.empl = val;
      this.getHours();
    }
  }

  constructor(private vS: VisitsService) {}

  ngOnInit() {}

  onNext() {
    this.nextClick.next();
  }

  onBack() {
    this.backClick.next();
  }

  onSelect(event) {
    const date = new Date(event.year, event.month - 1, event.day, 8, 0, 0, 0);
    this.selectedHour = undefined;
    this.hourSelect.next(undefined);
    this.selectedDay = this.days.find(d => {
      return new Date(d.date).getTime() === date.getTime();
    });

    this.hours = [];
    if (this.selectedDay) {
      this.selectedDay.hours.forEach(hour => {
        this.hours.push({ isSelected: false, hour: new Date(hour) });
      });
    }
  }

  onSelectHour(hour) {
    this.hours.forEach(h => (h.isSelected = false));
    hour.isSelected = true;
    this.selectedHour = hour;
    this.sendDate();
  }

  sendDate() {
    const selectedDate = new Date(this.selectedDay.date);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const day = selectedDate.getDate();
    const hour = this.selectedHour.hour.getHours();
    const minutes = this.selectedHour.hour.getMinutes();
    const date = new Date(year, month, day, hour, minutes);
    this.hourSelect.next(date);
  }

  onNavigate($event) {
    this.hours = [];
    this.selectedDay = undefined;
    this.selectedHour = undefined;
    this.hourSelect.next(undefined);
    this.getHours(new Date($event.next.year, $event.next.month - 1, 1), true);
  }

  getHours(date = new Date(), setDate = false) {
    if (!this.empl || this.services.length === 0) {
      return;
    }

    let duration = 0;
    this.services.forEach(s => (duration += s.time));

    const dateStr = date.toJSON();
    this.isGettingHours = true;

    this.hoursStream = this.vS
      .getHours(duration, dateStr, this.empl._id)
      .subscribe(
        (response: any) => {
          this.days = response.days;
          // set model and call on select to set hours collection
          if (setDate) {
            this.model = {
              year: date.getFullYear(),
              month: date.getMonth() + 1,
              day: date.getDate()
            };
            this.onSelect({
              year: date.getFullYear(),
              month: date.getMonth() + 1,
              day: date.getDate()
            });
          }

          this.isGettingHours = false;
        },
        err => {
          this.isGettingHours = false;
        }
      );
  }
}
