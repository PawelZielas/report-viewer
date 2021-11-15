import {TagStatus} from "../tag/tag.model";

export interface SearchCriteria {
  selectedDateIndex: number;
  dates: number[];
  phrase: string;
  tags: TagStatus[];
}
