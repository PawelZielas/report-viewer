import {Component, Input, OnInit} from '@angular/core';
import {ReportsData} from "../../services/reports.dto";

@Component({
  selector: 'efi-reports-item',
  templateUrl: './reports-item.component.html',
  styleUrls: ['./reports-item.component.scss']
})
export class ReportsItemComponent implements OnInit {


  @Input() reportItem: ReportsData;

  constructor() {
  }

  ngOnInit(): void {

  }

}
