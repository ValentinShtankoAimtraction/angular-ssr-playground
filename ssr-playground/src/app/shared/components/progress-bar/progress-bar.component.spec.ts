import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgressBar} from './progress-bar.component';

describe('ProgressBar', () => {
  let component: ProgressBar;
  let fixture: ComponentFixture<ProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBar],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
