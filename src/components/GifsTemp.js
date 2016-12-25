import React from 'react';

// GifsTemp component to render our mock data. combined version of GifList and GifItem components
const GifsTemp = ({gifs}) => {
  const gifItems = gifs.map((gif) => {
    return(
      <li key={gif.id}><img src={gif.url} /></li>
    );
  });

  return (
    <ul className="gif-list">{gifItems}</ul>
  );
};

export default GifsTemp;