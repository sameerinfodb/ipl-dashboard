import { IPLDashboardAction } from './../../../../../core/src/lib/interfaces/action.interface';
import { Team } from '@ipl/interfaces';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ipt-team-grid',
  templateUrl: './team-grid.component.html',
  styleUrls: ['./team-grid.component.scss']
})
export class TeamGridComponent {
  displayedColumn: string[] = ['id', 'name', 'shortCode'];

  @Input() dataSource: Team[];
  @Output() action: EventEmitter<IPLDashboardAction> = new EventEmitter();

  constructor() {}

  public doAction(type: string, payload?: string): void {
    this.action.emit({ type, payload });
  }
}
