import { Controller, Get } from '@nestjs/common';
import { IPLService } from './ipl.service';
import { Team, Player } from '@ipl/interfaces';

@Controller()
export class IPLController {
  constructor(private readonly iplService: IPLService) {}

  @Get('teams')
  getTeams(): Team[] {
    return this.iplService.getTeams();
  }

  @Get('players')
  getPlayers(): Player[] {
    return this.iplService.getPlayer();
  }
}
