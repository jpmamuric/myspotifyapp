import React from 'react';
import { GridTile } from 'material-ui/GridList';

const ListItem = ({artist}) => {
  const { images, name } = artist;
  const URL = images.map(image => image.url);

  return <GridTile className='gridtile-image'><img src={URL[0]||URL[1]} alt={name}/></GridTile>
}

export default ListItem;
