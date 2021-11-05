import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReportsService} from "../../services/reports.service";
import {ReportsData} from "../../services/reports.dto";
import {SearchCriteria} from "../search-controller/search.model";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {TagStatus} from "../tag/tag.model";

@Component({
  selector: 'efi-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, OnDestroy {

  reportData!: ReportsData[] | null;
  //@ts-ignore
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
      ).subscribe((reportsData) => {
        this.createFilterCriteria(reportsData.body);
        this.reportData = reportsData.body;
      },
      (error => {
          console.error(error);
          // display proper error message and provide stub value.
        }
      ));
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
    });

      this.criteria = {
        selectedDateIndex: 0,
        dates,
        tags: categories,
        phrase: '',
        placeholder: 'Podaj nazwę lub numer raportu',
      }
  }

  updateReportList(updatedCriteria: SearchCriteria): void {
    console.log("UPDATED", updatedCriteria);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
  }
}
