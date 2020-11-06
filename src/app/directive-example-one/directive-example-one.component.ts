import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example-one',
  templateUrl: './directive-example-one.component.html',
  styleUrls: ['./directive-example-one.component.css']
})
export class DirectiveExampleOneComponent implements OnInit {

  isHelloVisible:boolean=true;

  message ={background:"red","font-size":"25px"}
  helloclass= "btn btn-danger";
  worldclass= "btn btn-success";
   somedata:Array<string> = ["Stock Hand","Wallet","Transaction",  "Damage" , "Return"]
  constructor() { }

  ngOnInit(): void {
  }

  showWorld(){
    this.isHelloVisible =  false
  }
  
  showHello(){
    this.isHelloVisible =  true
  }
  handleClick(){
    alert('hello')
  }
}
