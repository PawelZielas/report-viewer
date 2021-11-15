import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchCriteria} from "./search.model";
import {TagStatus} from "../tag/tag.model";

@Component({
  selector: 'efi-search-controller',
  templateUrl: './search-controller.component.html',
  styleUrls: ['./search-controller.component.scss']
})
export class SearchControllerComponent {

  @Input() searchCriteria: SearchCriteria;
  @Output() criteriaChange: EventEmitter<SearchCriteria> = new EventEmitter();

  constructor() {
  }

  updateSelectedTags(updatedTag: TagStatus): void {
    const index = this.searchCriteria.tags.findIndex((tag: TagStatus) => {
      return tag.name === updatedTag.name
    });
    if (index === 0 && updatedTag.status) {
      this.resetTags();
    } else {
      if (index !== 0) {
        this.searchCriteria.tags[0].status = false;
        this.searchCriteria.tags[index].status = updatedTag.status;
        this.checkIfAnySelected();
      }
    }
    this.search();
  }

  resetTags(): void {
    this.searchCriteria.tags = this.searchCriteria.tags.map((tag, i) => {
      return i === 0 ? {...tag, status: true} : {...tag, status: false};
    });
  }

  checkIfAnySelected(): void {
    const notAllEmpty = this.searchCriteria.tags.some((tag) => {
      return tag.status;
    });
    if (!notAllEmpty) {
      this.searchCriteria.tags[0].status = true;
    }
  }

  updateDate(dateIndex: number): void {
    this.searchCriteria = {...this.searchCriteria, selectedDateIndex: dateIndex};
    this.search();
  }

  search(): void {
    this.criteriaChange.emit(this.searchCriteria);
  }

}
