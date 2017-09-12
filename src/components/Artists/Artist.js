import React from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {selectItem} from "../../actions/playerActions"
import {ArtistHeader, PositionHeader} from '../PageAssets/Headers'
import {PlayButton} from '../PageAssets/Images'
import {Segment, Grid, Reveal, Image} from 'semantic-ui-react'


const Artist = ({ position, name, spotifyUrl, imageUrl, uri, selectItem }) => {

  const handleClick = () => {
    selectItem(uri)
  }


  return (
    <Segment inverted vertical clearing padded>
      <Grid>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={2}>
            <PositionHeader position={position}/>
          </Grid.Column>

          <Grid.Column width={2}>
            <Reveal animated='fade' instant onClick={handleClick}>
            <Reveal.Content visible>
            <Image spaced src={imageUrl} floated={"left"} width={"70"} />
            </Reveal.Content>
            <Reveal.Content hidden>
              <PlayButton />
            </Reveal.Content>
            </Reveal>
          </Grid.Column>

          <Grid.Column width={12}>
            <ArtistHeader name={<a href={`${spotifyUrl}`} target="_blank">{name}</a>}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


  );
};

// Connect to redux so clicking on an album can dispatch selectItem
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectItem
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Artist)
