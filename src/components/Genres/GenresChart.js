import React from 'react';
import renderChart from './bubbleChartD3'
import ArtistsList from '../Artists/ArtistsList'
import {SectionHeader} from '../PageAssets/Headers'
import {Grid} from 'semantic-ui-react'

// TODO:
// Clean up folders and file names - all, but especially this file and CreateGenreChart
// Donut chart appending is super weird - fix this; ideally allowing clicking on genres button to re-render chart

class GenresChart extends React.Component{
  constructor(){
    super()

    this.state = {artists:[]}
  }

  handleClick = (artists) => {
    this.setState({artists})
  }

  render(){
    return(
      <Grid columns={2}>
      <Grid.Column textAlign={"center"}>
        <SectionHeader title={"Genres"}/>
        <div id='data-container'>{renderChart(this.props.data, this.handleClick)}</div>
      </Grid.Column>
      <Grid.Column textAlign={"center"} width={6} floated={"right"}>
        <SectionHeader title={"Artists"}/>
        <ArtistsList artists={this.state.artists}/>
      </Grid.Column>
      </Grid>
    )
  }
}

export {GenresChart}
