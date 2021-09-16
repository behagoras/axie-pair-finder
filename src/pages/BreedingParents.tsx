/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { Formik } from 'formik';
import React, { ReactElement } from 'react';
import AxieTable from '../components/AxieTable';
import CardSelector from '../components/CardSelector';
import InputNumber from '../components/InputNumber';
import SpecieSelector from '../components/SpecieSelector';
import useFilterParents from '../hooks/useFilterParents';
import { GeneSearchProps } from '../types/axies';
import getPrices from '../utils/getPrices';
// import { getAxies } from '../utils/getAxies';

export default function BreedingParents(props: GeneSearchProps): ReactElement {
  return (
    <Formik
      initialValues={props}
      onSubmit={() => { }}
    >

      {({ values }) => {
        const pairs = useFilterParents({ values });

        return (
          <>
            <div>
              <div style={{ display: 'flex' }}>
                <CardSelector part="Back" />
                <CardSelector part="Mouth" />
                <CardSelector part="Horn" />
                <CardSelector part="Tail" />
              </div>
              <div style={{ display: 'flex' }}>
                <SpecieSelector name="species" />
                <SpecieSelector name="Ears" />
                <SpecieSelector name="Eyes" />
              </div>
              <div style={{ display: 'flex' }}>
                <InputNumber name="fromPrice" />
                <InputNumber name="toPrice" />
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'ifr',
              // width: '100%',
              gridGap: 32,
            }}
            >
              {
                pairs.map((pair) => pair?.father && pair?.mother && (
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'auto auto auto', gridGap: 32, justifyContent: 'center', alignItems: 'center',
                  }}
                  >
                    <AxieTable axie={pair?.father} />
                    <AxieTable axie={pair?.mother} />
                    <div style={{ fontSize: 32 }}>
                      <div>
                        {pair.purity}
                        %
                      </div>
                      <div>
                        {
                          (pair?.father?.price && pair?.mother?.price)
                            ? getPrices(pair.father.price).priceUsd + getPrices(pair.mother.price).priceUsd
                            : 0
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>

          </>
        );
      }}
    </Formik>
  );
}
