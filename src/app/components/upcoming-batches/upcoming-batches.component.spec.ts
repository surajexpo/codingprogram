import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBatchesComponent } from './upcoming-batches.component';

describe('UpcomingBatchesComponent', () => {
  let component: UpcomingBatchesComponent;
  let fixture: ComponentFixture<UpcomingBatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingBatchesComponent]
    });
    fixture = TestBed.createComponent(UpcomingBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
