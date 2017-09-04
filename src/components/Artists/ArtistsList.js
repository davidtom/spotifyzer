import React from 'react';
import Artist from './Artist'

const ArtistsList = ({ artists }) => {
  const renderArtists = artists.map(artist =>
    <Artist key={artist.id}
            name={artist.name}
            spotifyUrl={artist.spotify_url}
            imageUrl={artist.image_url_small}/>
  );

  return (
    <div>
      {renderArtists}
    </div>
  );
};

export default ArtistsList;
