import { TextField } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React, { ReactElement } from 'react';

interface Props {
  name: string;
}

export default function InputNumber({ name }: Props): ReactElement {
  // const options =cardListArray.map(card => ({name:card.name}))
  const { values, setValues } = useFormikContext<any>();
  return (
    <TextField
      type="number"
      name={`${name}`}
      value={values[`${name}`]}
      onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
      variant="outlined"
    />
  );
}
