export interface MatingData {
  speciesName: string;
  maleAppendageLength: number;
  femaleBodySize: number;
  appendageLengthRatio: number;
  matingDuration: number;
  successfulMating: boolean;
}

export interface DefensiveProfile {
  speciesName: string;
  defensiveSoundPattern: string;
  defensivePosture: string;
  threatLevel: number;
  escapeVelocity: number;
}