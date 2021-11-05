import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ReportsData} from "./reports.dto";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  reportsUrl: string = 'http://localhost:4200/assets/data.json';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  fetchReports(): Observable<HttpResponse<ReportsData[]>> {
    return this.httpClient.get<ReportsData[]>(
      `${this.reportsUrl}`,
      {
        observe: "response" as "response",
        responseType: "json",
      });
  }
}
