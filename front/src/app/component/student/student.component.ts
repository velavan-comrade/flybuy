import { Component, OnInit } from '@angular/core';
import { RequestServicesService } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
data:any
id:any
  constructor(private Service:RequestServicesService) { }
  postReq(name:any,mat:any,tam:any,sci:any,ss:any,add:any,lat:any){
   this.id=1234
    this.data={
      "id":this.id,
      "name":name,
      "mat":mat,
      "tam":tam,
      "sci":sci,
      "ss":ss,
      "add":add,
      "lat":lat,
    }
      this.Service.postRequest(this.data).subscribe(data=>{
        if(data.length>0){
        console.log("succcess")        }
      },error=>console.log(error));
    }
  ngOnInit(): void {
  }

}
