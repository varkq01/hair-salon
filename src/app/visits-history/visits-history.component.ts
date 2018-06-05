import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visits-history',
  templateUrl: './visits-history.component.html',
  styleUrls: ['./visits-history.component.scss']
})
export class VisitsHistoryComponent implements OnInit {
  visits = [
    {
      date: '11.05.2018',
      services: ['Strzyżenie', 'Stylizacja', 'Farbowanie'],
      price: 120
    },
    {
      date: '15.05.2018',
      services: ['Strzyżenie', 'Stylizacja', 'Farbowanie'],
      price: 60
    },
    { date: '25.05.2018', services: ['Strzyżenie'], price: 30 },
    { date: '29.05.2018', services: ['Stylizacja', 'Farbowanie'], price: 45 }
  ];

  constructor() {}

  ngOnInit() {}
}
