import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchOverview} from "../actions/overviewActions"
import OverviewChart from '../components/Overview/OverviewChart'
import {ContentLoader, LibraryLoader} from '../components/PageAssets/Loaders'
import {Container, Divider} from 'semantic-ui-react'

class OverviewShow extends React.Component{

  componentWillMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.overview.tracks){this.props.fetchOverview()}
  }

  render(){
    return (
      <Container textAlign={"center"}>
        <Divider hidden/>
        <ContentLoader status={this.props.loading && !this.props.libraryLoading}/>
        <LibraryLoader status={this.props.libraryLoading}/>
        <OverviewChart data={this.props.overview}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.overview.loading,
    overview: {
      tracks: state.overview.tracks,
      artists: state.overview.artists,
      genres: state.overview.genres
    },
    libraryLoading: state.overview.loadingLibrary
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchOverview
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewShow)
