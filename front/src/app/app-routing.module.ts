import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoRequestComponent } from './component/auto-request/auto-request.component';
import { DeliveryComponent } from './component/delivery/delivery.component';

import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RequestHandleComponent } from './component/request-handle/request-handle.component';
import { RequestComponent } from './component/request/request.component';
import { StatusComponent } from './component/status/status.component';
import { StocksComponent } from './component/stocks/stocks.component';
import { StudentComponent } from './component/student/student.component';



const routes: Routes = [
  {
path:'student',
component:StudentComponent,
  },
  {
    path:'request-handle',
    component:RequestHandleComponent,
  },
  {
    path:'delivery',
    component:DeliveryComponent,
  },
  {
    path:'stock',
    component:StocksComponent,
  },
  {
    path:'status',
    component:StatusComponent,
  },
  {
    path:'request',
    component:RequestComponent,
  },
  {
    path:'auto-request',
    component:AutoRequestComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }