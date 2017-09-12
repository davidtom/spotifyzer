import React from 'react';
import Artist from './Artist'
import {Divider} from 'semantic-ui-react'

const ArtistsList = ({ artists }) => {
  const renderArtists = artists.map((artist, i) =>
    <div>
    <Artist key={i}
            position = {i+1}
            name={artist.name}
            spotifyUrl={artist.external_urls.spotify}
            imageUrl={artist.images[2].url}
            uri={artist.uri}/>
    <Divider hidden fitted/>
    </div>
  );
  return (
    <div>
      {renderArtists}
    </div>
  );
};

export default ArtistsList;
