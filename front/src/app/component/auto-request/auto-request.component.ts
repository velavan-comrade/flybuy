import { Component, OnInit } from '@angular/core';
import { RequestServicesService } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-auto-request', 
  templateUrl: './auto-request.component.html',
  styleUrls: ['./auto-request.component.css']
})
export class AutoRequestComponent implements OnInit {
  s:boolean=false;
 public message='';
 public product: any;
 public data1: any[] = [];
  constructor(private _productService : RequestServicesService) { }
  
  autoreq(value: any){
    this._productService.getProduct(value).subscribe(
      data=>this.product=data,

      error=>console.log(error)
    )
    
   for (const x of this.product) {
    
      for (const y of x.data) 
      {
        this.data1.push(y.productname);
      }
     }
   console.log(this.data1.length)
  if(this.data1.length==0){
     this.message='ALL STOCKS ARE AVAIL IN REQUIRED QUANTITY';
  }
  else{ 
     this.postdata(this.data1);
    this.data1=[];
    this.s=true;
  }

  }
  postdata(product:any[])
  {
    this._productService.postProduct(product).subscribe(data=>console.log(data),error=>console.log(error) );
  }


  ngOnInit(): void {
  }

}
