import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'efi-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {


  _availableItems: number[] | undefined;
  get availableItems(): number[] | undefined {
    return this._availableItems;
  }
  @Input() set availableItems(value: number[] | undefined) {
    this._availableItems = value;
    if (value && value?.length !== 0) {
      this.selectedItem = value[0];
    }
  }

  @Input() placeholder: string;
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();
  selectedItem: number;
  expanded = false;

  constructor() {
  }

  select(item: number): void {
    this.setSelectedItem(item);
  }

  setSelectedItem(select: number): void {
    this.selectedItem = select;
    this.selected.emit(this.availableItems?.indexOf(select));
    this.toggleOptions();
  }

  toggleOptions(): void {
    this.expanded = !this.expanded;
  }

}
