import { persistStore } from "redux-persist";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk';

import persistReducers from "./persistReducers";
import rootReducer from './modules/rootReducer';

const enhancer = __DEV__ ? compose(console.tron.createEnhancer(),
  applyMiddleware(reduxThunk)
) : applyMiddleware(reduxThunk);

const store = createStore(persistReducers(rootReducer), enhancer)
const persistor = persistStore(store);

export  {store, persistor};