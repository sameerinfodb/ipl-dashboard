import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpldashboardTeamListComponent } from './ipldashboard-team-list.component';

describe('IpldashboardTeamListComponent', () => {
  let component: IpldashboardTeamListComponent;
  let fixture: ComponentFixture<IpldashboardTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpldashboardTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpldashboardTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
