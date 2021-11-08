import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReportsService} from "../../services/reports.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {TagStatus} from "../tag/tag.model";
import {SearchCriteria} from "../search-controller/search.model";
import {ReportsData} from "../../services/reports.dto";

@Component({
  selector: 'efi-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, OnDestroy {

  reportsList: ReportsData[];
  criteria: SearchCriteria;
  onDestroy$: Subject<null> = new Subject<null>();

  constructor(
    private  reportsService: ReportsService,
  ) {
  }

  ngOnInit(): void {
    this.reportsService.fetchReports()
      .pipe(
        takeUntil(this.onDestroy$)
      ).subscribe((reportsData: HttpResponse<ReportsData[]>) => {
        this.createFilterCriteria(reportsData.body);
        this.reportsList = this.reportsService.filterReports(reportsData.body, this.criteria);
      },
      (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            console.error('Invalid request');
            break;
          case 500:
            console.error('Internal server error');
            break;
          default:
            console.error('Unnown error occured.')
        }
      }
    );
  }

  createFilterCriteria(reportsData: ReportsData[] | null): void {
    const dates: number[] = [];
    const categories: TagStatus[] = [
      {
        name: 'Wszystkie',
        status: true,
      }
    ];
    reportsData?.forEach((report) => {
      const dateYear = new Date(report.date).getFullYear();
      const category = report.category;
      if (!dates.includes(dateYear)) {
        dates.push(dateYear)
      }
      if (!categories.some((category) => {
        return category.name === report.category;
      })) {
        categories.push({name: report.category, status: false})
      }
    });
    dates.sort(function (a, b) {
      return a - b;
    }).reverse();

    this.criteria = {
      selectedDateIndex: 0,
      dates,
      tags: categories,
      phrase: '',
      placeholder: 'Podaj nazwę lub numer raportu',
    }
  }

  updateReportList(updatedCriteria: SearchCriteria): void {
    this.criteria = updatedCriteria;
    this.reportsService.fetchReports()
      .pipe(
        takeUntil(this.onDestroy$)
      ).subscribe((reportsData: HttpResponse<ReportsData[]>) => {
      this.reportsList = this.reportsService.filterReports(reportsData.body, this.criteria);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
  }
}
