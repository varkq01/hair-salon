import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-working-days',
  templateUrl: './home-working-days.component.html',
  styleUrls: ['./home-working-days.component.scss']
})
export class HomeWorkingDaysComponent implements OnInit {
  public days = [{
    name: 'PON',
    hours: '08-18'
  }, {
    name: 'WT',
    hours: '08-18'
  },{
    name: 'ŚR',
    hours: '08-18'
  },{
    name: 'CZW',
    hours: '08-18'
  },{
    name: 'PT',
    hours: '08-18'
  },{
    name: 'SOB',
    hours: '10-18'
  },{
    name: 'NIE',
  }]


  constructor() { }

  ngOnInit() {
  }

}
