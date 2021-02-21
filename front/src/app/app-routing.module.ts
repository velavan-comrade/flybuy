import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoRequestComponent } from './component/auto-request/auto-request.component';

import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RequestComponent } from './component/request/request.component';
import { StatusComponent } from './component/status/status.component';

const routes: Routes = [
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