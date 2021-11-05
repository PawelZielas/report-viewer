import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {TagStatus} from "./tag.model";


@Component({
  selector: 'efi-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {

  closeIcon = faTimes;
  //@ts-ignore
  @Input() tag: TagStatus;
  @Output() tagStateChange: EventEmitter<TagStatus> = new EventEmitter<TagStatus>();

  constructor() {
  }

  setFilterActive(e: Event): void {
    e.stopPropagation();
    if (!this.tag.status) {
      this.tagStateChange.emit(
        {name: this.tag.name, status: true}
      );
    }
  }

  setFilterInactive(e: Event): void {
    e.stopPropagation();
    this.tagStateChange.emit(
      {name: this.tag.name, status: false}
    );
  }
}
