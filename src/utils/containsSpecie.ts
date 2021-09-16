import { Part } from 'agp-npm/dist/models/part';

export default function containsSpecie(part:Part, classes:string[]) {
  if (classes.includes(part.d.cls)) return true;
  if (classes.includes(part.r1.cls)) return true;
  if (classes.includes(part.r2.cls)) return true;
  return false;
}
