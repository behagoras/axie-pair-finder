import React from 'react';
import * as Species from './mocks/species';
import BreedingParents from './pages/BreedingParents';
import Genes from './pages/Genes';
import GeneSearch from './pages/GeneSearch';

const geneArray = Object.entries(Species);

export interface RoutingProps {
  path: string;
  component: JSX.Element;
  exact:boolean,
}

export const geneSearchRoutes: RoutingProps[] = geneArray.map(([name, values]) => ({
  path: `/parents-search/${name}`,
  // eslint-disable-next-line react/jsx-props-no-spreading
  component: <BreedingParents {...values} />,
  exact: true,
}));

export const axieRoutes: RoutingProps[] = geneArray.map(([name, values]) => ({
  path: `/axie/${name}`,
  // eslint-disable-next-line react/jsx-props-no-spreading
  component: <GeneSearch {...values} />,
  exact: true,
}));

export const singleRoutes: RoutingProps[] = [
  {
    path: '/genes',
    component: <Genes />,
    exact: true,
  },
  {
    path: '/gene-search',
    component: <GeneSearch />,
    exact: true,
  },
  {
    path: '/breeding-parents',
    component: <BreedingParents />,
    exact: true,
  },
];

export default [...geneSearchRoutes, ...axieRoutes, ...singleRoutes];
