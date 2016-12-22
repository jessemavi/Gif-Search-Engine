import React from 'react';
import GifItem from './GifItem';

// stateless functional component
const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    // give each component of same type a unique key
    return <GifItem key={image.id} gif={image} />
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;