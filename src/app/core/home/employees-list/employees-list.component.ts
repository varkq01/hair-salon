import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  public employees = [{
    firstName: 'Jan',
    lastName: 'Kowalski',
    image: 'assets/images/hair-designer.jpg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien nisi, posuere id ipsum sit amet, 
    venenatis ultricies ipsum. Maecenas in luctus purus. Praesent laoreet mi urna, nec consectetur est scelerisque id. 
    Aliquam tortor nunc, fringilla eu congue non, vehicula non turpis. Nam non felis fermentum, pellentesque turpis nec, euismod erat.`,
    type: 'hair-dresser'
  }, {
    firstName: 'Agata',
    lastName: 'Papuga',
    image: 'assets/images/agata.jpg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien nisi, posuere id ipsum sit amet, 
    venenatis ultricies ipsum. Maecenas in luctus purus. Praesent laoreet mi urna, nec consectetur est scelerisque id. 
    Aliquam tortor nunc, fringilla eu congue non, vehicula non turpis. Nam non felis fermentum, pellentesque turpis nec, euismod erat.`,
    type: 'beautician'
  }]

  constructor() { }

  ngOnInit() {
  }

}
