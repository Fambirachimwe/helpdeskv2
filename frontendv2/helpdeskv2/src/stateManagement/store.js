// import {createStore} from 'redux';
import {pReducer} from './rootReducer';

import {persistStore} from 'redux-persist'

import { applyMiddleware, createStore } from 'redux';
 
// Logger with default options
import logger from 'redux-logger';


export const store = createStore(
  pReducer,
  applyMiddleware(logger)
)


// export const store = createStore(rootReducer);
export const  persistor = persistStore(store);

export default {store, persistor};
