import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk';
import rootReducer from './modules/rootReducer';

const enhancer = __DEV__ ? compose(console.tron.createEnhancer(),
  applyMiddleware(reduxThunk)
) : applyMiddleware(reduxThunk);

const store = createStore(rootReducer, enhancer)

export default store;