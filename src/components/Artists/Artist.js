import React from 'react';
import {ArtistHeader, PositionHeader} from '../PageAssets/Headers'
import {Segment, Grid, Image} from 'semantic-ui-react'


const Artist = ({ position, name, spotifyUrl, imageUrl }) => {
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
            <ArtistHeader name={<a href={`${spotifyUrl}`} target="_blank">{name}</a>}/>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>


  );
};

export default Artist;
//
