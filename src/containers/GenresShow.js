import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchGenres} from "../actions/genresActions"
import {PageHeader} from '../components/PageAssets/Headers'
import {DimmerLoader} from '../components/PageAssets/Loaders'
import GenreArtistsChart from '../components/Genres/GenreArtistsChart'
import {Segment} from 'semantic-ui-react'

class GenresShow extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.genresList.length){this.props.fetchGenres()}
  }

  displayLoading(){
    return this.props.loading && <DimmerLoader/>
  }

  render(){
    return (
      <Segment basic>
        {this.displayLoading()}
        <GenreArtistsChart data={{genresList: this.props.genresList, artistsTotal: this.props.artistsTotal}}/>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.genres.loading,
    genresList: state.genres.genresList,
    artistsTotal: state.genres.artistsTotal
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchGenres
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GenresShow)
