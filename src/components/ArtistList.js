import React from 'react'
import { connect } from 'react-redux';

import { GridList } from 'material-ui/GridList';
import ListItem from './ListItem';

class ArtistList extends React.Component {

  render() {
    const { artists } = this.props;
    if(!artists) {
      return <div></div>
    } else {
        return (
          <div>
            <GridList>
              { artists.map(artist => <ListItem key={artist.id} artist={artist} />) }
            </GridList>
          </div>
        );
    }
  }
}

const mapStateToProps = ({search}) => {
    const { artists } = search;
    return { artists };
}

export default connect(mapStateToProps)(ArtistList);
