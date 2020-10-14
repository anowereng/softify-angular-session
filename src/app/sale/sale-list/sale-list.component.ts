import { Component, OnInit, ViewEncapsulation } from '@angular/core';
  encapsulation: ViewEncapsulation.None
@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SaleListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'angular-datatables';

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

}
