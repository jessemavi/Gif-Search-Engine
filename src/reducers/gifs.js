import { REQUEST_GIFS } from '../actions/index';

// setting up initial state
const intitialState = {
  data: []
};

// state argument is state that our GifsReducer is responsible for
export default function gifs(state = intitialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        // object spread syntax: allows us to save a new copy of the satte with only the data property updated('save as' functionality, never mutating state directly)
        ...state, data: action.payload.body.data
      };
    default: 
      return state;
  }
}