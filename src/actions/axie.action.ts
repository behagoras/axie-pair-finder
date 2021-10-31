import { createAction } from '@reduxjs/toolkit';

export const getAxiesPlain = createAction<{}>(
  'axie/getAxies/plain',
);
export const getAxiesPlainResolved = createAction<{}>(
  'axie/getAxies/plain/resolved',
);
export const getAxiesPlainRejected = createAction(
  'axie/getAxies/rejected',
);
