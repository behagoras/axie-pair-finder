/* eslint-disable no-underscore-dangle *//* eslint-disable @typescript-eslint/naming-convention */
import { GeneSearchProps } from '../types/axies';

const _poisonDusk:any = {
  Tail: {
    partId: 'thorny-caterpillar', name: 'thorny-caterpillar', cls: 'tail',
  },
  Mouth: {
    cls: 'mouth', partId: 'toothless-bite', name: 'toothless-bite',
  },
  Back: {
    partId: 'garish-worm', name: 'garish-worm', cls: 'aquatic',
  },
  Horn: {
    partId: 'cerastes', name: 'cerastes', cls: 'bird',
  },
  species: ['Dusk'],
};

const _cuckooFish:any = {
  Tail: {
    partId: 'koi', name: 'koi', cls: 'aquatic',
  },
  Mouth: {
    cls: 'mouth', partId: 'risky-fish', name: 'risky-fish',
  },
  Back: {
    partId: 'goldfish', name: 'goldfish', cls: 'aquatic',
  },
  Horn: {
    partId: 'cuckoo', name: 'cuckoo', cls: 'bird',
  },
  species: ['Aquatic'],
  Ears: ['Aquatic', 'Bird'],
  Eyes: ['Aquatic', 'Bird'],
  ears: ['Aquatic', 'Bird'],
  eyes: ['Aquatic', 'Bird'],
};

const _shielded:any = {
  species: [
    'Reptile',
  ],
  Back: {
    name: 'bone-sail',
    type: 'reptile',
  },
  Mouth: {
    name: 'tiny-turtle',
    type: 'reptile',
  },
  Horn: {
    name: 'incisor',
    type: 'reptile',
  },
  Tail: {
    name: 'thorny-cattepilar',
    type: 'bug',
  },
  Ears: [
    'Aquatic',
    'Bird',
  ],
  Eyes: [
    'Aquatic',
    'Bird',
  ],
};

const _mechBeast:any = {
  species: ['Mech'],
  Back: {
    name: 'ronin', partId: 'ronin',
  },
  Mouth: {
    name: 'nut-cracker', partId: 'nut-cracker',
  },
  Horn: {
    name: 'cuckoo', partId: 'cuckoo',
  },
  Tail: {
    name: 'nut-cracker', partId: 'nut-cracker',
  },
  Ears: ['Aquatic', 'Bird'],
  Eyes: ['Aquatic', 'Bird'],
};
export const mechBeast: GeneSearchProps = _mechBeast;
export const poisonDusk: GeneSearchProps = _poisonDusk;
export const cuckooFish: GeneSearchProps = _cuckooFish;
export const shielded: GeneSearchProps = _shielded;
