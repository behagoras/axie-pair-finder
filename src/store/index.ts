import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store:Store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

const initSagas = () => {
  sagaMiddleware.run(rootSaga);
};

initSagas();

export default store;
