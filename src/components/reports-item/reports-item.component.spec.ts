import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsItemComponent } from './reports-item.component';

describe('ReportsItemComponent', () => {
  let component: ReportsItemComponent;
  let fixture: ComponentFixture<ReportsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
