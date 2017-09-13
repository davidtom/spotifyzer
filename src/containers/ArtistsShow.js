import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchTopArtists, updateArtistsTopTimeRange} from "../actions/artistsActions"
import ArtistsList from '../components/Artists/ArtistsList'
import {ContentLoader} from '../components/PageAssets/Loaders'
import {PageToolTip} from '../components/PageAssets/Messages'
import {topTimeRangeDropDown} from '../components/PageAssets/Dropdowns'
import {Container, Divider} from 'semantic-ui-react'

const toolTip = "Your top 50 artists based on your listening behavior over the past"

class ArtistsShow extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.topArtists.length){this.props.fetchTopArtists()}
  }

  render(){
    return (
      <Container textAlign={"center"}>
        <PageToolTip message={toolTip}
                      dropdown={
                        topTimeRangeDropDown(
                          {timeRange:this.props.timeRange,
                          changeRangeCallback:this.props.updateArtistsTopTimeRange,
                          fetchCallback:this.props.fetchTopArtists})

                      }
        />
        <Divider hidden/>
        <ContentLoader status={this.props.loading}/>
        <div className="scrollable">
          <ArtistsList artists={this.props.topArtists}/>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.artists.loading,
    topArtists: state.artists.topArtists,
    timeRange: state.artists.topTimeRange
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTopArtists,
    updateArtistsTopTimeRange
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistsShow)
