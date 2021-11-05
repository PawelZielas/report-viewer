import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "../components/header/header.component";
import {ReportsComponent} from '../components/reports/reports.component';
import {ReportsListComponent} from "../components/reports-list/reports-list.component";
import {ReportsItemComponent} from "../components/reports-item/reports-item.component";
import {SearchControllerComponent} from "../components/search-controller/search-controller.component";
import {TagComponent} from '../components/tag/tag.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SelectComponent} from '../components/select/select.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatSelectModule} from "@angular/material/select";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ReportsListComponent,
    ReportsItemComponent,
    HeaderComponent,
    SearchControllerComponent,
    HeaderComponent,
    ReportsComponent,
    TagComponent,
    SelectComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatSelectModule,
    MatInputModule,
    OverlayModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
