import { Card, FormLabel } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import CardSelector from '../CardSelector';
import InputNumber from '../InputNumber';
import SpecieSelector from '../SpecieSelector';

const Prices = styled.div`
  display:grid;
  grid-template-columns: repeat(2,1fr);
  width: 100%;
`;

const CustomCards = styled(Card)`
  padding: 16px;
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

export default function Filters() {
  return (
    <div>
      <CustomCards>
        <FormLabel>Parts</FormLabel>
        <CardSelector part="Back" />
        <CardSelector part="Mouth" />
        <CardSelector part="Horn" />
        <CardSelector part="Tail" />
      </CustomCards>
      <CustomCards>
        <FormLabel>Species</FormLabel>
        <SpecieSelector name="species" />
      </CustomCards>
      <CustomCards>
        <FormLabel>Eyes and ears</FormLabel>
        <SpecieSelector name="Ears" />
        <SpecieSelector name="Eyes" />
      </CustomCards>
      <CustomCards>
        <FormLabel>Prices</FormLabel>
        <Prices>
          <InputNumber name="fromPrice" label="from" />
          <InputNumber name="toPrice" label="to" />
        </Prices>
      </CustomCards>
    </div>
  );
}
