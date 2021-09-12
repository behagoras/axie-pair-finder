import React, { ReactElement } from 'react';
import AxieCardTable from '../components/AxieCardTable/AxieCardTable';
import cards from '../utils/cards';

export default function Genes(): ReactElement {
  return (
    <div>
      <AxieCardTable cards={Object.values(cards)} />
    </div>
  );
}
