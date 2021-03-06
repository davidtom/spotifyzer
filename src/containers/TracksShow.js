import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchTopTracks, updateTracksTopTimeRange} from "../actions/tracksActions"
import TracksList from '../components/Tracks/TracksList'
import {ContentLoader} from '../components/PageAssets/Loaders'
import {PageToolTip} from '../components/PageAssets/Messages'
import {topTimeRangeDropDown} from '../components/PageAssets/Dropdowns'
import {Container, Divider} from 'semantic-ui-react'

const toolTip = "Your top 50 tracks based on your listening behavior over the past"

class TracksShow extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.topTracks.length){this.props.fetchTopTracks()}
  }

  render(){
    return (
      <Container textAlign={"center"}>
        <PageToolTip message={toolTip}
                      dropdown={
                        topTimeRangeDropDown(
                          {timeRange:this.props.timeRange,
                          changeRangeCallback:this.props.updateTracksTopTimeRange,
                          fetchCallback:this.props.fetchTopTracks})

                      }
        />
        <Divider hidden/>
        <ContentLoader status={this.props.loading}/>
        <div className="scrollable">
          <TracksList tracks={this.props.topTracks}/>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.tracks.loading,
    topTracks: state.tracks.topTracks,
    timeRange: state.tracks.topTimeRange
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTopTracks,
    updateTracksTopTimeRange
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TracksShow)
