import React from 'react';
import Track from './Track'
import {Divider} from 'semantic-ui-react'

const TracksList = ({ tracks }) => {

  const renderTracks = tracks.map((track, i) => {

    // If tracks are coming from recently played, they are nested one level
    // deeper
    if (track.played_at){
      track = track.track
    }

    return (
    <div>
    <Track key={i}
            position = {i+1}
            name={track.name}
            spotifyUrl={track.external_urls.spotify}
            imageUrl={track.album.images[2].url}
            artists = {track.artists}
            album = {track.album}/>
    <Divider hidden fitted/>
    </div>)
  });

  return (
    <div>
      {renderTracks}
    </div>
  );
};

export default TracksList;
