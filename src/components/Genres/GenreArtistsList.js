import React from 'react';
import Artist from '../Artists/Artist'
import {EmptySelectionInstruction} from '../PageAssets/Messages'
import {Divider} from 'semantic-ui-react'

const GenreArtistsList = ({ artists }) => {
  const renderArtists = artists.map((artist, i) =>
    <div>
    <Artist key={i}
            position={i+1}
            name={artist.name}
            spotifyUrl={artist.spotify_url}
            imageUrl={artist.image_url_small}
            uri={artist.uri}/>
    <Divider hidden fitted/>
    </div>
  );
  return (
    <div id="artists-list-container">
      {renderArtists.length ? renderArtists : <EmptySelectionInstruction message={'Select a genre to view artists'}/>}
    </div>
  );
};

export default GenreArtistsList;
