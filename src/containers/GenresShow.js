import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchGenres, selectGenreArtists} from "../actions/genresActions"
import {SectionHeader} from '../components/PageAssets/Headers'
import {DimmerLoader} from '../components/PageAssets/Loaders'
import renderChart from '../components/Genres/bubbleChartD3'
import ArtistsList from '../components/Artists/ArtistsList'

import {Grid} from 'semantic-ui-react'

class GenresShow extends React.Component{

  handleClick = (artists) => {
    this.props.selectGenreArtists(artists)
  }

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    // Else: Fix issue with chart not displaying when flipping between dashboard
    // buttons by re-rendering it when the component mounts; on initial mount,
    // data doesn't exist yet, so need to also leverage componentWillReceiveProps
    if(!this.props.genresList.length){
      this.props.fetchGenres()
    } else {
      renderChart({genresList: this.props.genresList, artistsTotal: this.props.artistsTotal}, this.handleClick)
    }
  }

  componentWillReceiveProps(nextProps){
    // Fix issue with d3 chart not having data to display on initial load
    if (nextProps.genresList.length){
      renderChart({genresList: nextProps.genresList, artistsTotal: nextProps.artistsTotal}, this.handleClick)
    }
  }

  displayLoading(){
    return this.props.loading && <DimmerLoader/>
  }

  render(){
    //TODO: refactor dimmer/loader so its a component, with a variable prop
    return (
      <Grid columns={2}>
      {this.displayLoading()}
      <Grid.Column textAlign={"center"}>
        <SectionHeader title={"Genres"}/>
        <div id='data-container'></div>
      </Grid.Column>
      <Grid.Column textAlign={"center"} width={6} floated={"right"}>
        <SectionHeader title={"Artists"}/>
        <ArtistsList artists={this.props.selectedArtists}/>
      </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.genres.loading,
    genresList: state.genres.genresList,
    artistsTotal: state.genres.artistsTotal,
    selectedArtists: state.genres.selectedArtists
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchGenres,
    selectGenreArtists
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GenresShow)
