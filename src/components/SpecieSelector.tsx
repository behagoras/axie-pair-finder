import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useFormikContext } from 'formik';
import React, { ReactElement } from 'react';
import { AxieTypes } from '../types/axies';

// eslint-disable-next-line max-len
const capitalizeFirstLetter = (string: string) => string?.charAt(0)?.toUpperCase() + string?.slice(1);

export default function SpecieSelector({ name }:{ name:string }): ReactElement {
  // const options =cardListArray.map(card => ({name:card.name}))
  const species = Object.values(AxieTypes).map((type:string) => ({ name: type }));
  const { values, setValues } = useFormikContext<any>();

  return (
    <div>
      <Autocomplete
        value={values?.[name]}
        onChange={(_event: any, newValue: any) => {
          const newSpecies = newValue.map((el:any) => capitalizeFirstLetter(el.name));
          if (newSpecies) setValues({ ...values, [name]: newSpecies });
        }}
        multiple
        limitTags={2}
        id="combo-box-demo"
        options={species}
        getOptionLabel={(option) => option.name}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} variant="outlined" label={name} placeholder={name} />}
      />
    </div>
  );
}
