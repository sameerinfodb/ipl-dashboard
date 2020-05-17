export interface Message {
  message: string;
}

export interface Team {
  id: string;
  name: string;
  shortCode: string;
}

export interface Player {
  id: number;
  name: string;
  dob: string;
  battingHand: string;
  bowlingSkill: string;
  country: string;
  isUmpire: number;
}
export interface Match {
  id: number;
  matchDate: string;
  TeamId: number;
  opponentTeamId: number;
  seasonId: number;
  venueName: string;
  tossWinnerId: number;
  tossDecision: string;
  isSuperover: number;
  isResult: number;
  isDuckWorthLewis: number;
  winType: string;
  wonBy: string;
  matchWinnerId: number;
  manOfTheMatchId: number;
  firstUmpireId: number;
  secondUmpireId: number;
  cityName: string;
  hostCountry: string;
}
export interface PlayerMatch {
  matchId: number;
  playerId: number;
  teamId: number;
  isKeeper: number;
  isCaptain: number;
}
