import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { app_routing } from './app.routes';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FilterComponent } from './components/filter/filter.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HomeComponent } from './components/home/home.component';

import { HotelsService } from './services/hotels.service';

import { NouisliderModule } from 'ng2-nouislider';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { StarsFilterPipe } from './pipes/stars-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FilterComponent,
    HotelsComponent,
    HomeComponent,
    NameFilterPipe,
    StarsFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    app_routing,
    NouisliderModule,

  ],
  providers: [
    HotelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
