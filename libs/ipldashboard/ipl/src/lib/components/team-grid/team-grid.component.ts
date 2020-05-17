import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Team } from '@ipl/interfaces';
import { IPLDashboardAction } from './../../../../../core/src/lib/interfaces/action.interface';

@Component({
  selector: 'ipt-team-grid',
  templateUrl: './team-grid.component.html',
  styleUrls: ['./team-grid.component.scss']
})
export class TeamGridComponent implements OnInit, AfterViewInit {
  // #region Properties (4)

  @Output() public action: EventEmitter<
    IPLDashboardAction
  > = new EventEmitter();
  @Input() public dataSource: Team[];
  public displayedColumn: string[] = ['id', 'name', 'shortCode'];
  @ViewChild('selectedTeamId') public selectedTeamIdRef: ElementRef;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor() {}

  // #endregion Constructors (1)

  // #region Public Methods (3)

  public doAction(type: string, payload?: string): void {
    this.action.emit({ type, payload });
  }

  public ngAfterViewInit() {
    this.selectedTeamIdRef.nativeElement.value = 1;
  }

  public ngOnInit() {}

  // #endregion Public Methods (3)
}
