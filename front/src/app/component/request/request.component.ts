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
  constructor(private _productServicce:RequestServicesService) { }

  postReq(product: any,quantity: any){
  this.data={
    "productName":product,
    "quantity":quantity
  }
    this._productServicce.postRequest(this.data).subscribe(data=>this.status=data,error=>console.log(error))
    for (const x of this.status) {
      console.log(x.message);
    //  document.getElementById("box")?.nodeValue="";
    }
  }
  

  ngOnInit(): void {
  }

}
