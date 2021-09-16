/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { Button } from '@material-ui/core';
import { Formik } from 'formik';
import React, { ReactElement } from 'react';
import AxieTable from '../components/AxieTable';
import Filters from '../components/Filters';
import LayoutGeneFinder from '../components/LayoutGeneFinder';
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
      {({ values, handleSubmit }) => {
        const pairs = useFilterParents({ values });
        return (
          <LayoutGeneFinder
            filtersComponent={<Filters />}
            footer={(
              <Button variant="contained" onClick={() => handleSubmit()}>
                Submit
              </Button>
            )}
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
          </LayoutGeneFinder>
        );
      }}
    </Formik>
  );
}
