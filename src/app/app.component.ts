import {Component, ErrorHandler} from '@angular/core';

@Component({
  selector: 'efi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ErrorHandler{

  error: any;
  availableDates: number[] = [2020, 2019, 2017];
  handleError(error: any): void {
    this.error = error;
  }

  title = 'reports-viewer';
}
