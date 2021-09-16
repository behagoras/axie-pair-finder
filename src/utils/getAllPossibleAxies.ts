import { PartGene } from 'agp-npm/dist/models/part';
import { getAxies } from './getAxies';

interface Args {
  Back?: PartGene;
  Mouth?: PartGene;
  Horn?: PartGene;
  Tail?: PartGene;
  species?: string[];

}

export default async function getAllPossibleAxies({
  Back, Horn, Mouth, Tail, species,
}: Args) {
  const withoutBackAxies = await getAxies({
    Horn, Mouth, Tail, species,
  }, { Back });
  const withoutHornAxies = await getAxies({
    Back, Mouth, Tail, species,
  }, { Horn });
  const withoutMouthAxies = await getAxies({
    Back, Horn, Tail, species,
  }, { Mouth });
  const withoutTailAxies = await getAxies({
    Back, Horn, Mouth, species,
  }, { Tail });

  return [
    ...withoutBackAxies,
    ...withoutHornAxies,
    ...withoutMouthAxies,
    ...withoutTailAxies,
  ];
}
