import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import monsterReducer from './reducers/monsters';

const reducer = combineReducers({
  monsterReducer,
});

const store = createStore(reducer, applyMiddleware(ReduxThunk, logger));

export default store;
