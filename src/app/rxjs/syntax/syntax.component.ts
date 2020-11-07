import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DemoOneService } from './../demo-one.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syntax',
  templateUrl: './syntax.component.html',
  styleUrls: ['./syntax.component.css']
})
export class SyntaxComponent implements OnInit {

  constructor(private service:DemoOneService) { }

  data:any;
  ngOnInit(): void {
    debugger;
    this.data =  this.service.getNumberData();
  }

}
