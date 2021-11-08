import {Component, Input, OnInit} from '@angular/core';
import {ReportsData} from "../../services/reports.dto";

@Component({
  selector: 'efi-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {
  @Input() reportsList: ReportsData[];
  constructor() { }

  ngOnInit(): void {
  }

}
