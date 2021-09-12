import {AXIE_TYPES, TYPES} from '../types/axies'


export default function getColor(type: string) {
  return TYPES[type as AXIE_TYPES].color
}