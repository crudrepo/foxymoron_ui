import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass1',
  templateUrl: './ass1.component.html',
  styleUrls: ['./ass1.component.css']
})
export class Ass1Component implements OnInit {
  showResult:boolean = false;
  msg:string ="";
  str:string ="";
  constructor() { }

  ngOnInit() {
  }
  onSubmitTemplateBased() {
      let num = parseInt(this.str);
      let flag = 1;
      for(let i=2;i<num/2;i++)
      {
        if(num % i == 0)
        {
          flag = 0;
          break;
        }
      }
      this.showResult = true;
      if(flag == 1)
      {
        this.msg = num+" is prime number";
      }
      else
      {
        this.msg = num+" is not prime number";
      }
    }
  }

