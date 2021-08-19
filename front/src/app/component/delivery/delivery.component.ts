import { Component, OnInit } from '@angular/core';
import { RequestServicesService } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  deli:any;
  constructor(private service:RequestServicesService) { }
  deliver(){
this.service.delivered().subscribe(data=>console.log(data));
  }

  ngOnInit(): void {
   this.service.delivery().subscribe(data=>this.deli=data);
  }

}
