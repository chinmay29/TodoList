import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './VisibilityFilter';

module.exports = combineReducers({
  routing: routerReducer,
  todos,
  visibilityFilter
});
