import { Component, OnInit } from '@angular/core';
import { RequestServicesService } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-request-handle',
  templateUrl: './request-handle.component.html',
  styleUrls: ['./request-handle.component.css']
})
export class RequestHandleComponent implements OnInit {
request:any;
s:boolean=false;
  constructor(private service:RequestServicesService) { }
toggle()
{
  this.s=!this.s;
}
  ngOnInit(): void {
    this.service.getRequest().subscribe(data=>console.log(data));
    this.service.processedReq().subscribe(data=>this.request=data,error=>console.log(error))
  }

}
