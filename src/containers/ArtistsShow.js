import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchTopArtists} from "../actions/artistsActions"
import ArtistsList from '../components/Artists/ArtistsList'
import {DimmerLoader} from '../components/PageAssets/Loaders'
import {Container, Divider} from 'semantic-ui-react'

class ArtistsShow extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.topArtists.length){this.props.fetchTopArtists()}
  }

  render(){
    return (
      <Container textAlign={"center"}>
        <Divider hidden/>
        <DimmerLoader status={this.props.loading}/>
        <ArtistsList artists={this.props.topArtists}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.artists.loading,
    topArtists: state.artists.topArtists
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTopArtists
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistsShow)
