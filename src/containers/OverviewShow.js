import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchOverview} from "../actions/overviewActions"
import {PageHeader} from '../components/PageAssets/Headers'
import {DimmerLoader} from '../components/PageAssets/Loaders'
import {Segment} from 'semantic-ui-react'

class OverviewShow extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.data.tracks){this.props.fetchOverview()}
  }

  displayLoading(){
    return this.props.loading && <DimmerLoader/>
  }

  render(){
    return (
      <Segment basic>
        <PageHeader title={"Overview"}/>
        {this.displayLoading()}
        <p>Tracks: {this.props.data.tracks}</p>
        <p>Artists: {this.props.data.artists}</p>
        <p>Genres: {this.props.data.genres}</p>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.overview.loading,
    data: {
      tracks: state.overview.tracks,
      artists: state.overview.artists,
      genres: state.overview.genres
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchOverview
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewShow)
