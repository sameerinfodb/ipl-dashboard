import { async, TestBed } from '@angular/core/testing';
import { IpldashboardIplModule } from './ipldashboard-ipl.module';

describe('IpldashboardIplModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IpldashboardIplModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IpldashboardIplModule).toBeDefined();
  });
});
