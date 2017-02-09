import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row'
  }
}

class SearchBar extends React.Component {
  render(){
    const { searchbarTextChange, text, searchArtists } = this.props;
    const { containerStyle } = styles;
    return (
      <div style={containerStyle}>
        <TextField
          id='text-field-search'
          placeholder='enter search here'
          value={text}
          onChange={e=>searchbarTextChange(e.target.value)}
          />
        <FlatButton label='search' onTouchTap={()=>searchArtists({text})}/>
      </div>
    );
  }
}

const mapStateToProps = ({search}) => {
  const { text } = search;
  return { text };
}
export default connect(mapStateToProps, actions)(SearchBar);
