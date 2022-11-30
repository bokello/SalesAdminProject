import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

   // create an array of SalesPerson objects

  salesPersonList: SalesPerson[] = [

    new SalesPerson("Anup","Kumar","anup.kumar@gmail.com",5000),
    new SalesPerson("john","Doe","john@gmail.com",7500),
    new SalesPerson("Claire","Murphy","Claire@gmail.com",200),
    new SalesPerson("May","Truong","May@gmail.com",25000)
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
