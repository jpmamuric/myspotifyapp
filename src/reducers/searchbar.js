import { SEARCHBAR_TEXT_CHANGE, SEARCH_ARTISTS } from '../actions';

const initialState = {
  text: '',
  artists: null
}

export default (state = initialState, action ) => {
console.log(action);

  switch (action.type) {
    case SEARCHBAR_TEXT_CHANGE:
      return { ...state, text: action.payload };
    case SEARCH_ARTISTS:
      return { ...state, artists: action.payload };
    default:
      return state;
  }
}
