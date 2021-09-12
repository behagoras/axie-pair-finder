import cards from './cards';

export const cardListArray = Object.entries(cards).map(([, value]) => ({
  name: value.partName,
  type: value.class,
  expectType: value.expectType,
  part: value.part,
}));

export const types = new Set(cardListArray.map((item) => item.type));
