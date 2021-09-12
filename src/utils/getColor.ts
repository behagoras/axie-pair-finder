import { AxieTypes, TYPES } from '../types/axies';

export default function getColor(type: string) {
  return TYPES[type as AxieTypes].color;
}
