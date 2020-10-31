import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Input() employees:Employee[]

  constructor(private employeeService: EmployeeService) {
    
  }

  ngOnInit(): void {
  }
  //changeWareHouse() {
  //  this.destinationWarehouse =  this.destinationWarehouses.find(x => x.id === this.model.sourceWareHouseId)
  //}

}
//export class StockTransfer {
//  constructor() { }
//  sourceWareHouseId: number;
//  destinationWareHouseId: number;


//}
//export class WareHouseModel {
//  constructor() { }
//  id: number;
//  name: string;
//  warehouseType:  string
//}

