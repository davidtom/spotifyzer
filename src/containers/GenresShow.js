import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchGenres, selectGenre} from "../actions/genresActions"
import {SectionHeader} from '../components/PageAssets/Headers'
import {ContentLoader, LibraryLoader} from '../components/PageAssets/Loaders'
import renderChart from '../components/Genres/bubbleChartD3'
import GenreArtistsList from '../components/Genres/GenreArtistsList'

import {Grid} from 'semantic-ui-react'

class GenresShow extends React.Component{

  handleClick = (data) => {
    this.props.selectGenre(data)
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

    //If next props don't include genre data, set a polling interval
    if (nextProps.loadingLibrary){
      clearInterval(window.fetchGenreInterval)
      window.fetchGenreInterval = setInterval(this.props.fetchGenres, 5000)
    } else {
      clearInterval(window.fetchGenreInterval)
    }
  }

  sectionTitle(){
    const genre = this.props.selection.genre
    return genre ? `${genre} Artists` : "Artists"
  }

  render(){
    return (
      <Grid columns={2}>
      <Grid.Column textAlign={"center"}>
        <SectionHeader title={"Genres"}/>
        <div id='data-container'/>
          <ContentLoader status={this.props.loading && !this.props.loadingLibrary}/>
          <LibraryLoader status={this.props.loadingLibrary}/>
      </Grid.Column>
      <Grid.Column textAlign={"center"} width={6} floated={"right"}>
        <SectionHeader title={this.sectionTitle()}/>
        <GenreArtistsList artists={this.props.selection.artists}/>
      </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.genres.loading,
    loadingLibrary: state.genres.loadingLibrary,
    genresList: state.genres.genresList,
    artistsTotal: state.genres.artistsTotal,
    selection: state.genres.selection
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchGenres,
    selectGenre
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GenresShow)
