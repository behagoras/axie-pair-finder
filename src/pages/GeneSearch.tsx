/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { Button } from '@material-ui/core';
import { Formik } from 'formik';
import React, { ReactElement } from 'react';
import AxieTable from '../components/AxieTable';
import Filters from '../components/Filters';
import LayoutGeneFinder from '../components/LayoutGeneFinder';
import useFilterAxies from '../hooks/useFilterAxies';
import { GeneSearchProps } from '../types/axies';
// import { getAxies } from '../utils/getAxies';

export default function GeneSearch(props:GeneSearchProps): ReactElement {
  return (
    <Formik
      initialValues={props}
      onSubmit={() => {}}
    >
      {({ values, handleSubmit }) => {
        const axies = useFilterAxies({ values });
        return (
          <LayoutGeneFinder
            filtersComponent={<Filters />}
            footer={(
              <Button variant="contained" onClick={() => handleSubmit()}>
                Submit
              </Button>
            )}
          >
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', width: '100%', gridGap: 32,
            }}
            >
              { axies.map((axie) => (<AxieTable axie={axie} />)) }
            </div>
          </LayoutGeneFinder>
        );
      }}
    </Formik>
  );
}
