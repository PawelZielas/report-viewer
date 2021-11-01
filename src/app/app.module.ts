import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "../components/header/header.component";
import { ReportsComponent } from '../components/reports/reports.component';
import {ReportsListComponent} from "../components/reports-list/reports-list.component";
import {ReportsItemComponent} from "../components/reports-item/reports-item.component";
import {SearchControllerComponent} from "../components/search-controller/search-controller.component";

@NgModule({
  declarations: [
    AppComponent,
    ReportsListComponent,
    ReportsItemComponent,
    HeaderComponent,
    SearchControllerComponent,
    HeaderComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
