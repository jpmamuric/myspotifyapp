import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import search from './searchbar';
const reducers = combineReducers({
  search,
  routing
});

export default reducers;
