import {Component, Input, OnInit} from '@angular/core';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'efi-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() availableDates: number[] = [];
  chevronDown = faChevronDown;
  constructor() { }

  ngOnInit(): void {
  }

}
