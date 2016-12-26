import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';

// using Redux's built-in combineReducers function to create a single object that contains reducers
const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer
});

export default rootReducer;