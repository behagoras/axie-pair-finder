/* eslint-disable no-loop-func */
import { AxieGene } from 'agp-npm/dist/axie-gene';
import { PartGene } from 'agp-npm/dist/models/part';
import { Axie } from '../types/axies';
import { calculateBreakdownPurity } from './calculatePurity';

function constructQuery() {
  let query = 'query GetAxieBriefList($criteria: AxieSearchCriteria) { ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 30; i++) {
    query += `ax${i}: axies(auctionType: Sale, sort: PriceAsc, criteria: $criteria, from: ${i * 100
    }, size: 100) `;
    query += '{ results { id genes auction { currentPrice } } }\n';
  }
  query += ' }';
  return query;
}

const endpoint = 'https://axieinfinity.com/graphql-server-v2/graphql';
const breedCount = [0];

interface Args {
  Back?: PartGene;
  Mouth?: PartGene;
  Horn?: PartGene;
  Tail?: PartGene;
  species?: string[];
}

export const getAxies = ({
  Back, Horn, Mouth, Tail, species,
}: Args, omit?:Args): Promise<Axie[]> => {
  const parts = [];
  if (Back) parts.push(`back-${Back.name}`);
  if (Horn) parts.push(`horn-${Horn.name}`);
  if (Mouth) parts.push(`mouth-${Mouth.name}`);
  if (Tail) parts.push(`tail-${Tail.name}`);

  const body = {
    operationName: 'GetAxieBriefList',
    variables: {
      criteria: { classes: species, breedCount, parts },
    },
    query: constructQuery(),
  };

  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((res) => res.json()
      .then((data) => {
        const axiesWithGenes: Axie[] = data?.data?.ax0?.results?.map((axie: any) => {
          if (axie.genes.length === 0) return null;
          const genes = new AxieGene(axie.genes);
          const breakdownPurity = calculateBreakdownPurity(genes, {
            Back, Horn, Mouth, Tail, ...omit,
          });
          const { purity } = breakdownPurity;
          return {
            id: axie.id,
            price: axie.auction.currentPrice,
            genes,
            purity,
            breakdownPurity,
          } as Axie;
        });
        return axiesWithGenes;
      }));
};

export default getAxies;
