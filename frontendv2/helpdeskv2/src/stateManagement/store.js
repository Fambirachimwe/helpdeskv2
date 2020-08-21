// import {createStore} from 'redux';
import {pReducer} from './rootReducer'; // with 2 reducers


import {persistStore} from 'redux-persist'

import { applyMiddleware, createStore, combineReducers} from 'redux';
 
// Logger with default options
import logger from 'redux-logger';


export const store = createStore(
  pReducer,
  applyMiddleware(logger)
)




// export const store = createStore(rootReducer);
export const  persistor = persistStore(store);

export default {store, persistor};
