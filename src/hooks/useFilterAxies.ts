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

export default function useFilterAxies({ values }: { values: GeneSearchProps }) {
  const [axies, setAxies] = useState<Axie[]>([]);
  useEffect(() => {
    getAllPossibleAxies(values).then((_axies) => {
      setAxies(
        filterAxies(_axies, values),
      );
    });
  }, [
    values.Tail,
    values.Back,
    values.Mouth,
    values.Horn,
    values.Ears,
    values.Eyes,
  ]);
  useEffect(() => {
    setAxies(
      filterAxies(axies, values),
    );
  }, [values.fromPrice, values.toPrice]);

  return axies;
}
