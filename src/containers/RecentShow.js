import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchRecentTracks, selectTime} from "../actions/tracksActions"
import TracksList from '../components/Tracks/TracksList'
import RecentAnalysis from '../components/Tracks/RecentAnalysis'
import {SectionHeader} from '../components/PageAssets/Headers'
import {ContentLoader} from '../components/PageAssets/Loaders'
import {PageToolTip} from '../components/PageAssets/Messages'
import renderChart from '../components/Tracks/barChartD3'
import {Grid} from 'semantic-ui-react'

const toolTip = "Your 50 most recently played tracks. Tracks are not visible until they are finished playing and a track must be played for more than 30 seconds to be included. Tracks played in a “Private Session are not included."

class RecentShow extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    // Else: Fix issue with chart not displaying when flipping between dashboard
    // buttons by re-rendering it when the component mounts; on initial mount,
    // data doesn't exist yet, so need to also leverage componentWillReceiveProps
    if(!this.props.recentTracks.length){
      this.props.fetchRecentTracks()
    } else {
      renderChart({recentTracks: this.props.recentTracks}, this.props.selectTime)
    }
  }

  componentWillReceiveProps(nextProps){
    // Fix issue with d3 chart not having data to display on initial load
    if (nextProps.recentTracks.length){
      renderChart({recentTracks: nextProps.recentTracks}, this.props.selectTime)
    }
  }

  render(){
    return (
      <Grid textAlign="center">

        <Grid.Row>
          <Grid.Column width={14} >
            <PageToolTip message={toolTip}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>

          <Grid.Column textAlign="center" width={8}>
            <SectionHeader title={"50 Most Recent Tracks"}/>
              <div id='data-container'/>
              <ContentLoader status={this.props.loading}/>
              <RecentAnalysis hours={this.props.analysis.hours}
                            minutes={this.props.analysis.minutes}
                            perHour={this.props.analysis.perHour}/>
          </Grid.Column>

          <Grid.Column textAlign="center" width={6} floated="right">
            <SectionHeader title={'Tracks'}/>
              <div className="scrollable">
                <TracksList tracks={this.props.selection.tracks} recentTracks={true}/>
              </div>
            </Grid.Column>

        </Grid.Row>

      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.tracks.loading,
    recentTracks: state.tracks.recentTracks,
    analysis: state.tracks.recentTrackAnalysis,
    selection: state.tracks.timeSelection
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecentTracks,
    selectTime
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentShow)
