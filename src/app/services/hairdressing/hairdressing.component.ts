import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hairdressing',
  templateUrl: './hairdressing.component.html',
  styleUrls: ['./hairdressing.component.scss']
})
export class HairdressingComponent implements OnInit {

  public services= [ {
    name: 'Strzyżenie',
    services: [
      { name: 'Strzyżenie', price: 35, type: 'female', time: 60 },
      { name: 'Strzyżenie i stylizacja', price: 90, type: 'female' , time: 90 },    
      { name: 'Upięcie/ Loki/ Koki', price: 140, type: 'female' , time: 60 },    
      { name: 'Grzywka', price: 15, type: 'female' , time: 30 },  
      { name: 'Strzyżenie', price: 20, type: 'male', time: 30 },
      { name: 'Strzyżenie i stylizacja', price: 45, type: 'male' , time: 45 },    
      { name: 'Broda - regulacja', price: 25, type: 'male' , time: 30 },    
      { name: 'Broda - golenie', price: 50, type: 'male' , time: 45 },    
    ]
   }, {
     name: 'Koloryzacja',
     services: [
      { name: 'Pierwsze farbowanie', description: 'Strzyżenie i stylizacja w cenie', price: 220, type: 'female', time: 120 },   
      { name: 'Kolejne farbowanie', description: 'Strzyżenie i stylizacja w cenie', price: 190, type: 'female', time: 120 }, 
      { name: 'Ombre/ sombre', description: 'Strzyżenie i stylizacja w cenie', price: 240, type: 'female', time: 120 },     
      { name: 'Dekoloryzacja', price: 150, type: 'female', time: 60 },
    { name: 'Farbowanie', price: 90, type: 'male', time: 60 }, 
      
     ],
   }, {
     name: 'Zabiegi',
     services: [
      { name: 'Zabieg kreatynowy', price: 340, type: 'female', time: 60 },  
      { name: 'Reshading', description: 'Zabieg odsiwiania', price: 140, type: 'male', time: 90 }                          
     ]
   }
  ];

  constructor() { }

  ngOnInit() {
  }
}
