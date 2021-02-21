import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RequestServicesService } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private _statusService:RequestServicesService) { }
  public data1:any;
  ngOnInit(): void {
    
    this._statusService.getStatus().subscribe(data=>
    this.data1=data,error=>console.log(error));

  }

}
