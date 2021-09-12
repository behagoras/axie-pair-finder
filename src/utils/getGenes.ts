/* eslint-disable no-loop-func */
import { AxieGene } from "agp-npm/dist/axie-gene";
import { PartGene } from "agp-npm/dist/models/part";
import { Axie } from "../types/axies";

function constructQuery() {
  let query = "query GetAxieBriefList($criteria: AxieSearchCriteria) { ";
  for (let i = 0; i < 30; i++) {
    query += `ax${i}: axies(auctionType: Sale, sort: PriceAsc, criteria: $criteria, from: ${i * 100
      }, size: 100) `;
    query += "{ results { id genes auction { currentPrice } } }\n";
  }
  query += " }";
  return query;
}

const endpoint = "https://axieinfinity.com/graphql-server-v2/graphql";
const breedCount = [0];

const classes = ["Reptile"];



interface Args {
  Back?: PartGene;
  Mouth?: PartGene;
  Horn?: PartGene;
  Tail?: PartGene;
}

export const getGenes = ({ Back, Horn, Mouth, Tail }: Args): Promise<Axie[]> => {
  // const parts = [
  //   // "tail-thorny-caterpillar",
  //   // "mouth-tiny-turtle",
  //   // "horn-lagging",
  //   // "back-snail-shell",
  //   'tail-yam'
  // ];
  const parts = [];
  Back && parts.push(`back-${Back.name}`);
  Horn && parts.push(`horn-${Horn.name}`);
  Mouth && parts.push(`mouth-${Mouth.name}`);
  Tail && parts.push(`tail${Tail.name}`);

  const body = {
    operationName: "GetAxieBriefList",
    variables: {
      criteria: { classes: classes, breedCount: breedCount, parts: parts },
    },
    query: constructQuery(),
  };

  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json()
      .then((body) => {
        console.log('file: getGenes.ts ~ line 59 ~ .then ~ body', body)
        const axiesWithGenes: Axie[] = body.data.ax0.results.map((axie: any) => {
          // console.log('file: getGenes.ts ~ line 53 ~ axiesWithGenes ~ axie', axie)
          const genes = new AxieGene(axie.genes);
          return {
            id: axie.id,
            price: axie.auction.currentPrice,
            genes,
          } as Axie
        });
        return axiesWithGenes;
      })
    );
};