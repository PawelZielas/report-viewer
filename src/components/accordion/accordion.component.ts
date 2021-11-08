import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'efi-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  active: boolean = false;
  @Input() items: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAccordion(): void {
    this.active = !this.active;
  }
}
