import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchCriteria} from "../components/search-controller/search.model";
import {ReportsData} from "./reports.dto";
import {TagStatus} from "../components/tag/tag.model";

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

  filterReports(reports: ReportsData[] | null, filterParam: SearchCriteria): ReportsData[] {
    let filtered = reports ? reports : [];
    if (filterParam.phrase !== '') {
      filtered = filtered.filter((report) => {
        report.category.includes(filterParam.phrase) || report.description.includes(filterParam.phrase);
      })
    }
    filtered = filtered.filter((report) => {
      return new Date(report.date).getFullYear() === filterParam.dates[filterParam.selectedDateIndex];
    });
    let tags: string[] = this.getActiveTagsString(filterParam.tags);
    if (tags[0] !== 'Wszystkie') {
      filtered = filtered.filter((report) => {
        return tags.includes(report.category);
      })
    }
    return filtered;
  }

  getActiveTagsString(tags: TagStatus[]): string[] {
    return tags.filter((tag) => tag.status).map(tag => tag.name);
  }
}
