import { PartGene } from 'agp-npm/dist/models/part';
import { Formik } from 'formik';
import React, { ReactElement, useEffect } from 'react';
import AxieTable from '../components/AxieTable';
import CardSelector from '../components/CardSelector';
import { Axie } from '../types/axies';
import { getGenes } from '../utils/getGenes';

export default function GeneSearch(): ReactElement {
  return (
    <Formik
      initialValues={{} as {
        Back?: PartGene;
        Mouth?: PartGene;
        Horn?: PartGene;
        Tail?: PartGene;
      }}
      onSubmit={() => { }}
    >
      {({ values }) => {
        const [axies, setAxies] = React.useState<Axie[]>([]);
        useEffect(() => {
          getGenes(values).then((_axies) => {
            setAxies(_axies);
          });
        }, [values]);

        return (
          <>
            <div style={{ display: 'flex' }}>
              <CardSelector part="Back" />
              <CardSelector part="Mouth" />
              <CardSelector part="Horn" />
              <CardSelector part="Tail" />
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', width: '100%', gridGap: 32,
            }}
            >
              {
                axies
                  .map((axie) => (
                    <AxieTable axie={axie} />
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
