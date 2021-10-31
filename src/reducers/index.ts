import { combineReducers, createStore } from 'redux';
import axie, {
  AxieStoreState,
  initialState as initialAxieState,
} from './axie.reducer';

export const initialState: { axie:AxieStoreState } = {
  axie: initialAxieState,
};

export const store = createStore(
  combineReducers({
    axie,
  }),
  initialState,
);

export default combineReducers({
  axie,
});
