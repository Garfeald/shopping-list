import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import {rootReducer} from "./root-reducer";
import thunk from 'redux-thunk';

const middlewareEnhancer = applyMiddleware( logger, thunk);
const composedEnhancers = compose(middlewareEnhancer);


export const store = createStore(rootReducer, composedEnhancers);


