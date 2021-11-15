import {Component, Input, OnInit} from '@angular/core';
import {FileInfo} from "../../services/reports.dto";

@Component({
  selector: 'efi-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  active: boolean = false;
  @Input() items: FileInfo[] | null;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleAccordion(): void {
    if (this.active) {
      setTimeout(() => {
        this.active = !this.active;
      }, 200);
    } else {
      this.active = !this.active;
    }
  }
}
