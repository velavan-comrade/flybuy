import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { RequestServicesService } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  
  constructor(private _request:RequestServicesService) { }
 public stock: any;
  ngOnInit(): void {
    this._request.getStock().subscribe(data=>this.stock=data,error=>console.log(error));
  }

}
