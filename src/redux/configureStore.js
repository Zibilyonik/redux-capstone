import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import monsters from './monsters';

const reducer = combineReducers({
  monsters,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
