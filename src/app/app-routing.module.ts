import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReportsComponent} from "../components/reports/reports.component";

const routes: Routes = [
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: '**',
    redirectTo: 'reports',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
