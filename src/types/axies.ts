import { AxieGene } from 'agp-npm/dist/axie-gene';

export enum AxieTypes {
  PLANT = 'plant',
  AQUATIC = 'aquatic',
  BUG = 'bug',
  BIRD = 'bird',
  BEAST = 'beast',
  DUSK = 'dusk',
  REPTILE = 'reptile',
  DAWN = 'dawn',
  MECH = 'mech',
}

interface Type {
  color: string;
}

export interface Card {
  id: string;
  partName: string;
  skillName: string;
  defaultAttack: number;
  defaultDefense: number;
  defaultEnergy: number;
  expectType: string;
  iconId: string;
  triggerColor: string;
  triggerText: string;
  description: string;
  part: string;
  class: string;
  filter_id: string;
  ability_score: number;
  ability_score_extra: number;
  ability_score_class: number;
  combo_bonus: boolean;
  plant_only: boolean;
  aquatic_only: boolean;
  chain_only: boolean;
}

export const TYPES: Record<AxieTypes, Type> = {
  plant: {
    color: 'rgb(108, 192, 0)',
  },
  aquatic: {
    color: 'rgb(0, 184, 206)',
  },
  bug: {
    color: 'rgb(255, 83, 65)',
  },
  bird: {
    color: 'rgb(255, 139, 189)',
  },
  beast: {
    color: 'rgb(255, 184, 18)',
  },
  reptile: {
    color: 'rgb(200, 138, 224)',
  },
  dusk: {
    color: 'rgb(0, 0, 0)',
  },
  dawn: {
    color: 'rgb(0, 0, 0)',
  },
  mech: {
    color: 'rgb(0, 0, 0)',
  },
};

export interface Axie {
  id: string;
  genes: AxieGene;
  price: string;
}
