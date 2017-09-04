import React from 'react';
import {ArtistHeader} from '../PageAssets/Headers'
import {Segment, Image} from 'semantic-ui-react'


const Artist = ({ name, spotifyUrl, imageUrl }) => {
  return (
    <Segment inverted vertical clearing padded>
      <Image spaced src={imageUrl} floated={"left"} width={"70"}/>
      <ArtistHeader name={<a href={`${spotifyUrl}`} target="_blank">{name}</a>}/>
    </Segment>
  );
};

export default Artist;
//
