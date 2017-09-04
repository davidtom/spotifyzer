import React from 'react';
import Artist from './Artist'
import {Divider} from 'semantic-ui-react'

const ArtistsList = ({ artists }) => {
  const renderArtists = artists.map(artist =>
    <div>
    <Artist key={artist.id}
            name={artist.name}
            spotifyUrl={artist.spotify_url}
            imageUrl={artist.image_url_small}/>
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
