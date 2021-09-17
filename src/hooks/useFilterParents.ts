/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Axie, GeneSearchProps } from '../types/axies';
import getAllPossibleAxies from '../utils/getAllPossibleAxies';

const filterAxies = (axies: Axie[], values:GeneSearchProps) => axies.filter((axie) => {
  const priceEth = Math.floor((+axie.price / 1000000000000000000) * 1000) / 1000;
  const priceUsd = Math.floor(priceEth * 3337);
  const fromPrice = values.fromPrice ? +values.fromPrice < priceUsd : true;
  const toPrice = values.toPrice ? +values.toPrice > priceUsd : true;
  return fromPrice && toPrice;
}).sort((a, b) => b.purity - a.purity);

interface Pair{
  purity: number;
  father?: Axie;
  mother?: Axie;
}

export default function useFilterParents({ values }: { values: GeneSearchProps }) {
  const [axies, setAxies] = useState<Axie[]>([]);
  const [pairs, setPairs] = useState<Pair[]>([]);

  const fetchAllAxies = () => {
    // eslint-disable-next-line no-console
    console.log('values', values);
    getAllPossibleAxies(values).then((_axies) => {
      setAxies(
        filterAxies(_axies, values),
      );
    });
  };

  useEffect(() => {
    if (values.Tail || values.Back || values.Mouth || values.Horn || values.Ears || values.Eyes || values.ears || values.eyes || values.species) {
      fetchAllAxies();
    }
  }, []);

  useEffect(() => {
    const _pairs = axies
      .sort((a, b) => +b.id - +a.id)
      .map((father: Axie) => axies.map((mother: Axie) => {
        if (father.id !== mother.id) {
          return { father, mother };
        }
        return undefined;
      })).reduce((acc, val) => acc.concat(val), [])
      .map((parents) => {
        if (!parents) return undefined;
        return parents;
      })
      .map((parents) => {
        if (parents?.father) {
          const backPurity = (parents.father.breakdownPurity.back + parents.mother.breakdownPurity.back) / 2;
          const tailPurity = (parents.father.breakdownPurity.tail + parents.mother.breakdownPurity.tail) / 2;
          const mouthPurity = (parents.father.breakdownPurity.mouth + parents.mother.breakdownPurity.mouth) / 2;
          const hornPurity = (parents.father.breakdownPurity.horn + parents.mother.breakdownPurity.horn) / 2;
          const purity = (backPurity + tailPurity + mouthPurity + hornPurity) / 4;
          return { ...parents, purity };
        }
        return { ...parents, purity: 0 };
      })
      .sort((a, b) => b.purity - a.purity);

    const pairsUniqueIdsSet = new Set(_pairs.map((pair) => `${pair?.father?.id}-${pair?.mother?.id}`));
    const pairsUniqueIds = Array.from(pairsUniqueIdsSet)
      .map((pair) => {
        const pairArray = pair.split('-');
        const fatherId = pairArray[0];
        const motherId = pairArray[1];
        return { fatherId, motherId };
      });
    const pairsWithoutDuplicates = pairsUniqueIds.map((pair) => _pairs.find((myPair) => (
      myPair.father?.id === pair.fatherId
          && myPair.mother?.id === pair.motherId
    )))
      .filter((pair) => pair && pair.father && pair.mother)
      .filter((pair, index, array) => {
        if (!pair?.father || !pair?.mother) return false;
        if (array[index - 1]?.father === pair?.mother && array[index - 1]?.mother === pair?.father) return false;
        return true;
      })
      .filter((el, index) => index < 500);

    setPairs(pairsWithoutDuplicates as Pair[]);
  }, [axies]);

  useEffect(() => {
    setAxies(
      filterAxies(axies, values),
    );
  }, [values.fromPrice, values.toPrice]);

  return { pairs, fetchAllAxies };
}
