import { Team, Player } from '@ipl/interfaces';
import * as teamData from './data/team.json';
import * as playerData from './data/player.json';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IPLService {
  getTeams(): Team[] {
    return teamData.teams;
  }

  getPlayer(): Player[] {
    return playerData.players;
  }
}
