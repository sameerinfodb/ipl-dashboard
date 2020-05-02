import { async, TestBed } from '@angular/core/testing';
import { IpldashboardCoreModule } from './ipldashboard-core.module';

describe('IpldashboardCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IpldashboardCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IpldashboardCoreModule).toBeDefined();
  });
});
