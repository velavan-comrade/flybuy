import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { RequestServicesService } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  data:any;
  status:any;
  s:boolean | undefined;
  productn:any
  constructor(private _productServicce:RequestServicesService) { }

  postReq(product: any,quantity: any){
  this.data={
    "productname":product,
    "quantity":quantity
  }
    this._productServicce.postRequest(this.data).subscribe(data=>{
      if(data.length>0){
        this.s=true;
      }
    },error=>console.log(error));
   /* console.log(this.status);
  for (const x of this.status) {
    if(x.message=="REQUEST SENT")
    {
      console.log("SENT");
     this.s=true;
    }
  }
    */
  }
  

  ngOnInit(): void {
    this.s=false;
    this._productServicce.getStock().subscribe(data=>this.productn=data,error=>console.log(error));
  }

}
