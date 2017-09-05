import React from 'react';
import {TrackHeader, PositionHeader} from '../PageAssets/Headers'
import {Segment, Image, Grid} from 'semantic-ui-react'


const Track = ({ position, name, spotifyUrl, imageUrl, artists, album}) => {

  const trackArtists = artists.map(artist => artist.name).join(", ")

  return (
    <Segment inverted vertical clearing padded>
      <Grid>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={2}>
            <PositionHeader position={position}/>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image spaced src={imageUrl} floated={"left"} width={"70"}/>
          </Grid.Column>
          <Grid.Column width={12}>
            <TrackHeader
              name={<a href={`${spotifyUrl}`} target="_blank">{name}</a>}
              artists={trackArtists}
              album={album.name} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Track;
//
