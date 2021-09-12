import { AxieGene } from 'agp-npm/dist/axie-gene';
import { Part, PartGene } from 'agp-npm/dist/models/part';
import { camelize } from './toCamelCase';

export function calculatePartPurity(
  part: PartGene | undefined,
  gene: Part,
) {
  let purity = 0;
  if (part) {
    console.log('calculatePartPurity', {
      part, gene, partName: camelize(part?.name), geneName: camelize(gene.d.name),
    });
    if (camelize(part?.name) === camelize(gene.d.name)) { purity += 75; }
    if (camelize(part?.name) === camelize(gene.r1.name)) { purity += 18.75; }
    if (camelize(part?.name) === camelize(gene.r2.name)) { purity += 6.25; }
  }
  return purity;
}

export default function calculatePurity(
  genes: AxieGene,
  parts: { Back?: PartGene; Mouth?: PartGene; Horn?: PartGene; Tail?: PartGene },
) {
  const {
    Back, Mouth, Horn, Tail,
  } = parts;
  const partsQty = (Back ? 1 : 0) + (Mouth ? 1 : 0) + (Horn ? 1 : 0) + (Tail ? 1 : 0);
  const backPurity = calculatePartPurity(Back, genes.back);
  const mouthPurity = calculatePartPurity(Mouth, genes.mouth);
  const hornPurity = calculatePartPurity(Horn, genes.horn);
  const tailPurity = calculatePartPurity(Tail, genes.tail);
  return (backPurity + mouthPurity + hornPurity + tailPurity) / partsQty;
}
