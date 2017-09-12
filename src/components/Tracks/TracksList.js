import React from 'react';
import Track from './Track'
import {EmptySelectionInstruction} from '../PageAssets/Messages'
import {Divider} from 'semantic-ui-react'

const TracksList = ({ tracks, recentTracks=false }) => {

  const renderTracks = tracks.map((track, i) => {

    // If tracks are coming from recently played, they are nested one level
    // deeper
    if (recentTracks){
      track = track.track
    }

    return (
    <div>
    <Track key={i}
            position = {i+1}
            name={track.name}
            spotifyUrl={track.external_urls.spotify}
            imageUrl={track.album.images[2].url}
            artists={track.artists}
            album={track.album}
            uri={track.uri}/>
    <Divider hidden fitted/>
    </div>)
  });

  const renderListOrInstructions = function(){
    // NOTE: this is a bit messy, but DRY's up my components by removing need for
    // two TrackLists (one for top tracks with no instructions and one for
    // recent tracks with instructions (click graph to see tracks))

    // If there are no tracks to render...
    if (!renderTracks.length){
      // ...and component is being called for recent tracks, render instructions
      if(recentTracks){
        return(<EmptySelectionInstruction message={"Select a time to view tracks"}/>)
      // ...and it is not being called for recent tracks, render an empty list
      } else {return (renderTracks)}
    // Else, there are tracks to render, so return the list
    } else {
      return(renderTracks)
    }
  }

  return (
    <div>
      {renderListOrInstructions()}
    </div>
  );
};

export default TracksList;
