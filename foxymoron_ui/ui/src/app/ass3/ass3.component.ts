import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {
  showResult:boolean = false;
  msg:string ="";
  str:string ="";
  constructor() { }

  ngOnInit() {
  }
  onSubmitTemplateBased() {
    let num = parseInt(this.str);
    let str = "0 1";  
    let a=0,b=1,temp;
    for(let i=1;i<num-1;i++)
    {
      temp = a+b;
      a = b;
      b = temp;
      str = str + " "+ temp;
    }
    this.showResult = true;
    this.msg = str;
  }
}
