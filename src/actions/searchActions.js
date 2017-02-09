import {
  SEARCHBAR_TEXT_CHANGE,
  SEARCH_ARTISTS

} from './types';

import axios from 'axios';

export const searchbarTextChange = text => ({ type: SEARCHBAR_TEXT_CHANGE, payload: text });

export const searchArtists = ({ text }) => {
  console.log(text);
  return dispatch => {
    if(text !== '') {
      axios.get(`https://api.spotify.com/v1/search?query=${text.toLowerCase()}&offset=0&limit=20&type=artist`)
        .then( res => dispatch({ type: SEARCH_ARTISTS, payload: res.data.artists.items}))
        .catch( err => console.log(err));
    }
  }
}
