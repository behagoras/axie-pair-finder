/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { Formik } from 'formik';
import React, { ReactElement } from 'react';
import AxieTable from '../components/AxieTable';
import CardSelector from '../components/CardSelector';
import InputNumber from '../components/InputNumber';
import SpecieSelector from '../components/SpecieSelector';
import useFilterAxies from '../hooks/useFilterAxies';
import { GeneSearchProps } from '../types/axies';
// import { getAxies } from '../utils/getAxies';

export default function GeneSearch(props:GeneSearchProps): ReactElement {
  return (
    <Formik
      initialValues={props}
      onSubmit={() => {}}
    >

      {({ values }) => {
        console.log('file: GeneSearch.tsx ~ line 21 ~ GeneSearch ~ values', values);
        const axies = useFilterAxies({ values });

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
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', width: '100%', gridGap: 32,
            }}
            >
              {
                axies
                  .map((axie) => (<AxieTable axie={axie} />))
              }
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>

          </>
        );
      }}
    </Formik>
  );
}
