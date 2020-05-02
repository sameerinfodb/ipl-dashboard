import { async, TestBed } from '@angular/core/testing';
import { IpldashboardUiModule } from './ipldashboard-ui.module';

describe('IpldashboardUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IpldashboardUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IpldashboardUiModule).toBeDefined();
  });
});
