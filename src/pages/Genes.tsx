import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { getAxiesPlain } from '../actions';
import AxieCardTable from '../components/AxieCardTable/AxieCardTable';
import cards from '../utils/cards';

export default function Genes(): ReactElement {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAxiesPlain({}));
  }, []);
  return (
    <div>
      <AxieCardTable cards={Object.values(cards)} />
    </div>
  );
}
