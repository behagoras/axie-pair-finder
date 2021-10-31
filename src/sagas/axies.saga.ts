import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { put, retry, takeLatest } from 'redux-saga/effects';
import * as axieActions from '../actions/axie.action';
import { getServerStatus } from '../services/axie.services';

// TODO: Actually get the axies from the server
// TODO: Remove console logs
// TODO: Update the store using the server response
function* getAxiesPlainGenes(action: PayloadAction<{}>) {
  const {
    getAxiesPlainResolved: getAxiesResolved,
    getAxiesPlainRejected: getAxiesRejected,
  } = axieActions;
  try {
    const response: AxiosResponse<{}> = yield retry(
      1,
      1500,
      getServerStatus,
    );
    if (response.data) {
      console.log('getAxiesPlainGenes resolved');
      yield put(getAxiesResolved(response.data));
    } else {
      console.log('getAxiesPlainGenes rejected');
      yield put(getAxiesRejected());
    }
  } catch (e) {
    yield put(getAxiesRejected());
  }
}

function* watchGetAxiesSagas() {
  yield takeLatest(axieActions.getAxiesPlain, getAxiesPlainGenes);
}

export default [
  watchGetAxiesSagas,
];
