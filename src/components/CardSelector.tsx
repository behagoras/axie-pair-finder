import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useFormikContext } from 'formik';
import React, { ReactElement } from 'react';
import { cardListArray } from '../utils/cardList';

interface Props {
  part: 'Back' | 'Mouth' | 'Horn' | 'Tail'
}

export default function CardSelector({ part }: Props): ReactElement {
  // const options =cardListArray.map(card => ({name:card.name}))
  const filteredCards = cardListArray.filter((card) => card.part === part);
  const { values, setValues } = useFormikContext<any>();
  return (
    <div>
      <Autocomplete
        value={values[part]}
        onChange={(event: any, newValue: any) => {
          setValues({ ...values, [part]: newValue });
        }}
        id="combo-box-demo"
        options={filteredCards}
        getOptionLabel={(option) => option.name}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} label={part} variant="outlined" />}
      />
    </div>
  );
}
