import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  styleUrls: ['./ass2.component.css']
})
export class Ass2Component implements OnInit {
  showResult:boolean = false;
  msg:string ="";
  str:string ="";
  
  constructor(private userService:UserserviceService) { }

  ngOnInit() {
  }
  onSubmitTemplateBased() {
    this.userService.ass2({str:this.str}).subscribe(data =>{
      //console.log(data);
      this.showResult = true;

      this.msg = data['result'];

    });
  }
}
