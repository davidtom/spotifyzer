import React from 'react';
import {ArtistHeader} from '../PageAssets/Headers'
import {Segment} from 'semantic-ui-react'

const EmptySelectionInstruction = () => (
  <Segment inverted vertical clearing padded>
    <ArtistHeader name={"Select a genre to view artists"}/>
  </Segment>
)

export default EmptySelectionInstruction
