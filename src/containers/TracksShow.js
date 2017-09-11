import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchTopTracks} from "../actions/tracksActions"
import TracksList from '../components/Tracks/TracksList'
import {ContentLoader} from '../components/PageAssets/Loaders'
import {Container, Divider} from 'semantic-ui-react'

class TracksShow extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.topTracks.length){this.props.fetchTopTracks()}
  }

  render(){
    return (
      <Container className="scrollable" textAlign={"center"}>
        <Divider hidden/>
        <ContentLoader status={this.props.loading}/>
        <TracksList tracks={this.props.topTracks}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.tracks.loading,
    topTracks: state.tracks.topTracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTopTracks
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TracksShow)
