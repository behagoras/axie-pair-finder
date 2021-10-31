import { createReducer } from '@reduxjs/toolkit';
import { getAxiesPlain, getAxiesPlainRejected, getAxiesPlainResolved } from '../actions';
import { Axie } from '../types/axies';

export interface AxieStoreState {
  axies: {
    initialized: boolean;
    axies?: Axie[];
  }
}

export const initialState: AxieStoreState = {
  axies: {
    initialized: false,
  },
};

export default createReducer(initialState, {
  [getAxiesPlain.toString()]: (state) => ({ ...state, axies: { initialized: false } }),
  [getAxiesPlainResolved.toString()]: (state) => ({ ...state, axies: { initialized: true } }),
  [getAxiesPlainRejected.toString()]: (state) => ({ ...state, axies: { initialized: true } }),
});
