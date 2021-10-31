import { fork } from 'redux-saga/effects';
import axiesSagas from './axies.saga';

export default function* rootSaga() {
  // eslint-disable-next-line no-restricted-syntax
  for (const saga of axiesSagas) {
    yield fork(saga);
  }
}
