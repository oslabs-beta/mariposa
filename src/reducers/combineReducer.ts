import { combineReducers } from 'redux';
import graphReducer from './graphReducer'

const reducers = combineReducers({
  graph: graphReducer,
})

export default reducers;