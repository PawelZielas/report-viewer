import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SearchCriteria} from "./search.model";
import {TagStatus} from "../tag/tag.model";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'efi-search-controller',
  templateUrl: './search-controller.component.html',
  styleUrls: ['./search-controller.component.scss']
})
export class SearchControllerComponent implements OnInit, OnChanges {

  initCriteria = {
    selectedDateIndex: 0,
    dates: [],
    phrase: '',
    placeholder: 'Wpisz tekst aby przeszukać liste',
    tags: [{name: 'test', status: false}]
  };

  test: { dupa: TagStatus[] } = {
    dupa: [
      {name: 'test', status: false},
      {name: 'test2', status: true}
    ]
  };
  @Input() searchCriteria: SearchCriteria = this.initCriteria;
  @Output() criteriaChange: EventEmitter<SearchCriteria> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  // TAGS
  updateSelectedTags(updatedTag: TagStatus): void {
    const index = this.searchCriteria.tags.findIndex((tag) => {
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

  // TAGS

  updateDate(date: MatSelectChange): void {
    this.searchCriteria = {...this.searchCriteria, selectedDateIndex: this.searchCriteria.dates.indexOf(date.value)};
  }

  updateSearchPhrase(): void {
  }

}
