import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  model: StockTransfer;
 
  destinationWarehouse: WareHouseModel;

  destinationWarehouses: WareHouseModel[] = [
    { id: 2, name: 'type-2', warehouseType: 'dealer' },
    { id: 1, name: 'type-1' ,warehouseType: 'franchaise' },
    { id: 3, name: 'type-3', warehouseType: 'saller' },
    { id: 4, name: 'type-4', warehouseType: 'dealer-2' },
    { id: 5, name: 'type-5', warehouseType: 'dealer-3' },
  ];
  constructor() {
    this.model = new StockTransfer();
  }

  ngOnInit(): void {
    
  }
  changeWareHouse() {
    this.destinationWarehouse =  this.destinationWarehouses.find(x => x.id === this.model.sourceWareHouseId)
  }

}
export class StockTransfer {
  constructor() { }
  sourceWareHouseId: number;
  destinationWareHouseId: number;


}
export class WareHouseModel {
  constructor() { }
  id: number;
  name: string;
  warehouseType:  string
}

