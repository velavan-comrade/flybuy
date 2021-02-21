import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AutoRequestComponent } from './component/auto-request/auto-request.component';
import { StatusComponent } from './component/status/status.component';
import { RequestComponent } from './component/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AutoRequestComponent,
    StatusComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
