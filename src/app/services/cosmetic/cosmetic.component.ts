import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmetic',
  templateUrl: './cosmetic.component.html',
  styleUrls: ['./cosmetic.component.scss']
})
export class CosmeticComponent implements OnInit {
  public services = [
    {
      name: 'Zabiegi',
      services: [
        { name: 'Masaż twarzy', price: 55, time: 30 },
        { name: 'Mikrodermabrazja diamentowa', price: 140, time: 60 },
        { name: 'Oczyszczanie twarzy ', price: 120, time: 40 },
        { name: 'Zabieg złuszczający', description:'Przy pomocy kwasu', price: 140, time: 90 },
        { name: 'Zabieg odżywczy', price: 160, time: 60 },
        { name: 'Zabieg dla cer wrażliwych', price: 160, time: 60 },
        { name: 'Zabieg liftingujący', price: 200, time: 60 },
      ],
    }, {
      name: 'Brwi i Oczy',
      services: [
        { name: 'Regulacja brwi', price: 20, time: 40 },
        { name: 'Henna', price: 40, time: 50 },
        { name: 'Rzęsy', price: 25 , time: 30},
        { name: 'Brwi i rzęsy', price: 40, time: 110 },
      ]
    },{
      name: 'Dłonie',
      services: [
        { name: 'Manicure Klasyczny', price: 55 },
        { name: 'Manicure Japoński', price: 50 },
        { name: 'Manicure Hybrydowy', price: 80 },
      ]
    },
    {
      name: 'Stopy',
      services: [
        { name: 'Pedicure Klasyczny', price: 80, time: 40 },
        { name: 'Pedicure Leczniczy', price: 90, time: 90 },
      ]
    }, {
      name: 'Inne',
      services: [
        { name: 'Makijaż', price: 100, time: 60 },
        { name: 'Makijaż ślubny', price: 150, time: 120 },
        { name: 'Przekłuwanie uszu', price: 60, time: 30 } 
      ]
    }];
    
  constructor() { }

  ngOnInit() {
  }

}
