import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderInterceptorService } from './services/loaderInterceptorService';
import { LoaderComponent } from './loader/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
