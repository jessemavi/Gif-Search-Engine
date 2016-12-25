import { combineReducers } from 'redux';
import GifsReducer from './gifs';

// using Redux's built-in combineReducers function to create a single object that contains reducers
const rootReducer = combineReducers({
  gifs: GifsReducer
});

export default rootReducer;