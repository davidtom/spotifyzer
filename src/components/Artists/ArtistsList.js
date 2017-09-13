import React from 'react';
import Artist from './Artist'
import {Divider} from 'semantic-ui-react'

const ArtistsList = ({ artists }) => {
  const renderArtists = artists.map((artist, i) =>{

    // Check to see if an artist has images before sending them to Artist component
    const defaultImageUrl = 'https://i.imgur.com/6iOdzDu.png'
    const imageUrl = artist.images[0] ? artist.images[0].url : defaultImageUrl

    return (
    <div>
    <Artist key={i}
            position = {i+1}
            name={artist.name}
            spotifyUrl={artist.external_urls.spotify}
            imageUrl={imageUrl}
            uri={artist.uri}/>
    <Divider hidden fitted/>
    </div>)
  });

  return (
    <div>
      {renderArtists}
    </div>
  );
};

export default ArtistsList;
