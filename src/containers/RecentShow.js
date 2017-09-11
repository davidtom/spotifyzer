import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchRecentTracks} from "../actions/tracksActions"
import TracksList from '../components/Tracks/TracksList'
import {SectionHeader} from '../components/PageAssets/Headers'
import {ContentLoader} from '../components/PageAssets/Loaders'
import renderChart from '../components/Tracks/barChartD3'
import {Grid} from 'semantic-ui-react'

class RecentShow extends React.Component{

  // TODO:
  // Comment out d3 code
  // Edit css - remove any unneeded selectors

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    // Else: Fix issue with chart not displaying when flipping between dashboard
    // buttons by re-rendering it when the component mounts; on initial mount,
    // data doesn't exist yet, so need to also leverage componentWillReceiveProps
    if(!this.props.recentTracks.length){
      this.props.fetchRecentTracks()
    } else {
      renderChart({recentTracks: this.props.recentTracks})
    }
  }

  componentWillReceiveProps(nextProps){
    // Fix issue with d3 chart not having data to display on initial load
    if (nextProps.recentTracks.length){
      renderChart({recentTracks: nextProps.recentTracks})
    }
  }

  render(){
    return (
      <Grid columns={2}>
      <Grid.Column textAlign={"center"}>
        <SectionHeader title={"Recent Tracks"}/>
        <div id='data-container'/>
          <ContentLoader status={this.props.loading}/>
      </Grid.Column>
      <Grid.Column textAlign={"center"} width={6} floated={"right"}>
        <SectionHeader title={'Tracks'}/>

      </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.tracks.loading,
    recentTracks: state.tracks.recentTracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecentTracks
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentShow)
